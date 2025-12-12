const badRequestResponse = {
    success: false,
    err: "",
    data: {},
    msg: "Bad Request | Malformed Request"
}

const ValidationTheatreCreateRequest = async (req, res, next) => {
    // validate the name 

    if (!req.body.name) {
        badRequestResponse.msg = "The name of the theatre is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.pincode) {
        badRequestResponse.msg = "The pincode of the theatre is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.city) {
        badRequestResponse.msg = "The city of the theatre is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    next(); //everything is fine move to the next middleware
}

module.exports = {
    ValidationTheatreCreateRequest
    
}