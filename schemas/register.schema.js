const Joi = require('joi');

const id = Joi.number().integer();
const username = Joi.string().min(3).max(32);
const email = Joi.string().email();
const ip = Joi.string();
const dateCreated = Joi.string().isoDate();
// const sessions = Joi.array().items(Joi.string().isoDate());
// const dataSize = Joi.array().items(Joi.number());
const mac = Joi.string();
const nodo = Joi.string();


const createRegisterSchema = Joi.object({
    email: email.required(),
    username: username,
    ip: ip,
    dateCreated: dateCreated,
    nodo: nodo,
    mac: mac,
})

const updateRegisterSchema = Joi.object({
    email: email.required(),
    username: username,
    ip: ip,
    dateCreated: dateCreated,
    nodo: nodo,
    mac: mac,
})

const getRegisterSchema = Joi.object({
    id: id.required(),
})

const emailRegisterUpdateSchema = Joi.object({
    email: email.required(),
})

module.exports = { 
    createRegisterSchema, 
    updateRegisterSchema, 
    getRegisterSchema,
    emailRegisterUpdateSchema
}