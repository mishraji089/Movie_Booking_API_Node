const badRequestResponse = {
    success: false,
    err: "",
    data: {},
    msg: "Bad Request | Malformed Request"
}
const validateMovieCreateRequest = async (req, res, next) => {
    //validate the movie name

    if (!req.body.name) {
        badRequestResponse.err = "The name of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }
    // validate the movie description

    if (!req.body.description) {
        badRequestResponse.err = "The Description of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    //validate the movie cast

    if (!req.body.casts || !(req.body.casts instanceof Array) || req.body.casts.length <= 0) {
        badRequestResponse.err = "The name of the casts is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.trailerUrl) {
        badRequestResponse.err = "The Trailer URL of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }
    if (!req.body.director) {
        badRequestResponse.err = "The Director of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }
    if (!req.body.releaseDate) {
        badRequestResponse.err = "The release Date of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }




    next();

}

module.exports = {
    validateMovieCreateRequest
};
