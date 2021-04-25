const { render } = require("ejs");
var mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
var path = require("path");
var Employee = require("../models/Employee");

var employeeController = {};

employeeController.list = function (req, res) {
  Employee.find().exec(function (err, employees) {
    if (err) {
      console.log("Error: ", err);
    } else {
      let list_file = path.join(__dirname, '..', 'views', 'employees', 'index');
      res.render(list_file, { employees });
    }
  })
};

employeeController.show = function (req, res) {
  Employee.findOne({ _id: req.params.id }).exec(function (err, employee) {
    if (err) {
      console.log("Error: ", err);
    } else {
      let show_view = path.join(__dirname, '..', 'views', 'employees', 'show');
      console.log("Showing employee: " + employee);
      res.render(show_view, { employee })
    }
  });
};

employeeController.create = function (req, res) {
  res.render("../views/employees/create");
};

employeeController.save = function (req, res) {
  console.log("Received employee info: ");
  console.log(req.body);
  const employee = new Employee(req.body);
  console.log("Created Employee: " + employee);

  employee.save((err) => {
    if (err) {
      console.log(err);
      res.render('../views/employees/create')
    } else {
      console.log("Successfully saved an employee.");
      res.redirect('/employees/show/' + employee._id);
    }
  })
};

employeeController.edit = function (req, res) {
  Employee.findOne({ _id: req.params.id }).exec(function (err, employee) {
    if (err) {
      console.log("Error: ", err);
    } else {
      let edit_view = path.join(__dirname, '..', 'views', 'employees', 'edit');
      console.log("Editing employee: ", employee);
      res.render(edit_view, { employee });
    }
  })
};

employeeController.update = function (req, res) {
  Employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        address: req.body.address,
        position: req.body.position,
        salary: req.body.salary
      }
    },
    {
      new: true
    },
    function (err, employee) {
      if (err) {
        console.log("Erro: ", err);
        let edit_view = path.join(__dirname, '..', 'views', 'employees', 'edit');
        res.render(edit_view, { employee: req.body });
      } else {
        res.redirect(`/employees/show/${employee._id}`)
      }
    })
};

employeeController.delete = function (req, res) {
  console.log(req.params.id);
  Employee.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Employee deleted!");
      res.redirect("/employees");
    }
  });
};

employeeController.filter = function (req, res) {
  res.render("../views/employees/filter");
};

employeeController.filterList = function (req, res) {
  console.log(req.query);

  let filters = {};
  if (req.query.position) {
    filters['position'] = req.query.position;
  }
  if (req.query.salary) {
    filters['salary'] = { $gte: req.query.salary };
  }

  console.log("Filtering employees: ", filters);

  Employee.find(filters, function (err, employees) {
    if (err) {
      console.log("Error: ", err);
    } else {
      let list_file = path.join(__dirname, '..', 'views', 'employees', 'index');
      console.log("Listing Filtered Employees");
      res.render(list_file, { employees });
    }
  })

}

module.exports = employeeController;
