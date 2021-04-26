var express = require('express');
var router = express.Router();
const employee = require("../controllers/EmployeeController.js");

// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/show/:id', employee.show);

// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete);

// Filters employee list
router.get('/filter', employee.filter);

// Filters employee list
router.get('/filter/list', employee.filterList);

module.exports = router;
