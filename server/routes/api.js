const auth = require('../app/middleware/jwt');

const router = require('express').Router();

const UserController = require('../app/сontrollers/user-controller');

router.route("/login")
    .post(UserController.login);

router.route("/register")
    .post(UserController.register);


module.exports = router;