const { ValidationError } = require('sequelize');
const boom = require('@hapi/boom');

function logErrors(error, req, res, next) {
    // console.log("ESTOY en ERRORLOG")
    console.error(error);
    next(error);
}

function errorHandler(error, req, res, next) {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
}

function boomErrorHandler(error, req, res, next) {
    if(error.isBoom) {
        console.log("ESTOY en ERROR BOOM")
        const { output } = error;
        res.status(output.statusCode).json(output.payload);
    }
    next(error);
}

function ormErrorHandler(error, req, res,next)  {
    if(error instanceof ValidationError) {
        res.status(409).json({
            statusCode: 409,
            message: error.name,
            errors: error.errors
        });
    }
    next(error);
} 

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }