function errorHandler(error, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "oops something went wrong."
        }
    });
}

module.exports = errorHandler;