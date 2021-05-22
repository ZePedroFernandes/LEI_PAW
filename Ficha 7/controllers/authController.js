var User = require('../models/user');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../jwtsecret/config')

var authController = {};

authController.login = function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err)
            return res.status(500).json({ message: 'error' })

        if (!user)
            return res.status(404).json({ message: 'no user found' });

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid)
            return res.status(401).json({ auth: false, token: null });

        let token = createToken(user);
        res.json({ auth: true, token, role: user.role });
    });
}

function createToken(user) {
    return jwt.sign({ id: user._id, role: user.role }, config.secret, { expiresIn: 60 * 60 * 4 })
}


authController.logout = function (req, res) {
    res.json({ auth: false, token: null });
}

authController.register = function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password);

    User.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: 'user'
        },
        function (err, user) {
            if (err)
                return res.status(500).json({ message: 'error', errorDetails: 'error registering the user' });

            let token = createToken(user._id);
            res.json({ auth: true, token, role: user.role });
        })
}

authController.verifyToken = function (req, res, next) {
    // var token = req.cookies['x-access-token'];
    // console.log(req.cookies);
    var token = req.headers['x-access-token'];

    console.log(req.headers);

    if (!token)
        return res.status(403).json({ auth: false, message: 'No token provided' });

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err)
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token' });

        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    })
}

authController.profile = function (req, res) {
    User.findById(req.userId, (err, user) => {
        res.json(user);
    })
}

authController.verifyRoleAdmin = function (req, res, next) {
    // User.findById(req.userId, (err, user) => {
    //     if (err)
    //         return res.status(500).json({ message: 'error', errorDetails: 'problem finding user in database' });

    //     if (!user)
    //         return res.status(404).json({ message: 'error', errorDetails: 'user not found' });

    //     if (user.role !== 'admin')
    //         return res.status(403).json({ auth: false, message: 'not authorized' });

    //     next();
    // })
    if (req.role !== 'admin')
        return res.status(403).json({ auth: false, message: 'not authorized' });

    next()
}

module.exports = authController;