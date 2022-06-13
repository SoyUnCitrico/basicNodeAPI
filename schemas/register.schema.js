const { required } = require('joi');
const Joi = require('joi');

const id = Joi.string().uuid();
const username = Joi.string().alphanum().min(3).max(32);
const email = Joi.string().email();
const position = Joi.number();
const ip = Joi.string();
// const mac
// const dateCreacion = Joi.isoDate();
// const dateConexion = Joi.array().items(Joi.isoDate);
const dataSize = Joi.number();
const image = Joi.string().uri();
const inBlock = Joi.boolean();


const createRegisterSchema = Joi.object({
    username: username,
    email: email.required(),
})

const updateRegisterSchema = Joi.object({
    username: username,
    email: email,
    ip: ip
})

const getRegisterSchema = Joi.object({
    id: id.required(),
})

module.exports = { 
    createRegisterSchema, 
    updateRegisterSchema, 
    getRegisterSchema 
}