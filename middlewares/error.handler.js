function logErrors(err, req, res, next) {
    console.log("ESTOY en ERRORLOG")
    console.error(err);
    next(err);
}

function errorHandler(err, req, res, next) {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
}

function boomErrorHandler(err, req, res, next) {
    if(err.isBoom) {
        console.log("ESTOY en ERROR BOOM")
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }