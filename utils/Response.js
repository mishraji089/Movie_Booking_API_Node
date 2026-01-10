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

module.exports={
    successResponseBody,
    errorResponseBody
}