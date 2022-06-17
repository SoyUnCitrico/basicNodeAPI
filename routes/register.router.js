const express = require('express');
const RegisterService = require('../services/register.service')
const validatorHandler = require('../middlewares/validator.handler')
const {
    createRegisterSchema, 
    updateRegisterSchema, 
    getRegisterSchema,
    emailRegisterUpdateSchema
} = require('../schemas/register.schema.js');
const router = express.Router();
const service = new RegisterService();

// GETS
router.get('/', async (req,res, next)=>{
    try {
        const registers = await service.find();
        res.json(registers);
    } catch (error) {
        next(error)
    }
});

router.get('/:id', 
    validatorHandler(getRegisterSchema, 'params'),
    async (req,res, next) => {
        try {
            const { id } = req.params;
            const register = await service.findByID(id);
            res.json(register);
        } catch(error) {
            next(error);
        }
    }
);

// POSTS
router.post('/',
    validatorHandler(createRegisterSchema, 'body'),
    async (req,res, next) => {
        try {
            const body = req.body;
            const newRegister = await service.create(body);
            res.status(201).json({
                message: "Creado: ",
                statusCode: 201,
                data: newRegister 
            });
        } catch(error) {
            next(error);
        }
    }
);


router.patch('/',
    validatorHandler(updateRegisterSchema, 'body'),
    async (req,res,next)=>{
        try {
            const body = req.body;
            // console.log("BODY:", body);
            let id = null;
            console.log("**********EMAIL:", body.email);
            if(body.email) {
                s = await service.findOne(body.email);
                id = s.dataValues.id;    
            }
            console.log("**********ID: ", id)
            if(id) {  
                const register = await service.update(id, body);
                res.json(register)
            }  else {
                throw new Error('Este email no se encuentra en la base de datos')
            }
            
        } catch (error) {
            next(error)
        }
    }
)

router.delete('/:id', 
    validatorHandler(getRegisterSchema, 'params'),    
    async (req,res, next)=>{
        try {
            const { id } = req.params;
            const response = await service.delete(id);
            res.status(201).json(response)
        } catch(error) {
            next(error);
        }
    }
)

module.exports = router