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

const ValidationUpdateMovies = async (req, res, next) => {

    const { movieIds, insert } = req.body;   // ⭐ ADD THIS

    if (insert === undefined) {               // ⭐ FIX boolean check
        badRequestResponse.msg = "The insert parameter is missing in the request";
        return res.status(400).json(badRequestResponse);
    }

    if (!movieIds) {
        badRequestResponse.msg = "No movies present in the request to be updated in theatre";
        return res.status(400).json(badRequestResponse);
    }

    if (!Array.isArray(movieIds)) {            // ⭐ FIX check
        badRequestResponse.msg = "Expected array of movies but found something else";
        return res.status(400).json(badRequestResponse);
    }

    if (movieIds.length === 0) {
        badRequestResponse.msg = "No movies present in the array provided";
        return res.status(400).json(badRequestResponse);
    }

    next();
};


module.exports = {
    ValidationTheatreCreateRequest,
    ValidationUpdateMovies

}