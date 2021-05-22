const User = require("../models/user")

var userController = {}

userController.getAllUsers = function (req, res) {
    User.find((err, users) => {
        if (err) 
            res.status(500).json({ message: 'error', errorDetails: 'error reading user data base' });

        res.json(users)
    })
}

module.exports = userController