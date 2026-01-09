const userService = require("../services/user.service");


const errorResponseBody = {
    err: {},
    data: {},
    msg: "Something went wrong, cannot process the request",
    success: false
}

const successResponseBody = {
    err: {},
    data: {},
    msg: "Successfully processed the request",
    success: true
}


const signup = async (req, res) => {

    try {
        const response = await userService.createUser(req.body);
        successResponseBody.data = response;
        successResponseBody.msg = "Successfully registered a user";
        return res.status(201).json(successResponseBody);
    } catch (error) {
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}
module.exports = {
signup
}