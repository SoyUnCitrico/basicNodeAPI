const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
    // Middleware conclosures dinamico
    return(req,res,next) => {
        const data = req[property];
        // req.body,
        // req.params,
        // req.query
        const {error} = schema.validate(data, {abortEarly: false});
        if(error) {
            throw boom.badRequest(error)
        }
        next();
    }
}

module.exports = validatorHandler;