const express = require('express');
const RegisterService = require('../services/register.service')
const validatorHandler = require('../middlewares/validator.handler')
const {
    createRegisterSchema, 
    updateRegisterSchema, 
    getRegisterSchema 
} = require('../schemas/register.schema.js');
const router = express.Router();
const service = new RegisterService();

// GETS
router.get('/', async (req,res)=>{
    const registers = await service.find();
    res.json(registers);

});

router.get('/:id', 
    validatorHandler(getRegisterSchema, 'params'),
    async (req,res, next) => {
        try {
            const { id } = req.params;
            const register = await service.findOne(id);
            res.json(register);
        } catch(error) {
            next(error);
        }
    }
);

router.get('/:position/address/:ip',async (req,res) => {
    const { position,ip } = req.params;
    res.json({
        position,
        ip,
        username: 'check',
        email: 'emmail4@user.com',
        id: 1983895403947,
    });
});

// POSTS
router.post('/',
    validatorHandler(createRegisterSchema, 'body'),
    async (req,res) => {
        const body = req.body;
        const newRegister = await service.create(body);
        res.status(201).json({
            message: "Creado: ",
            data: newRegister 
        });
    }
);


router.patch('/:id',
    validatorHandler(getRegisterSchema, 'params'),
    validatorHandler(updateRegisterSchema, 'body'),
    async (req,res,next)=>{
        try {
            const { id } = req.params;
            const body = req.body;
            const register = await service.update(id, body);
            res.json(register)
        } catch (error) {
            next(error)
        }
    }
)

router.delete('/:id', async (req,res)=>{
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response) 
})

module.exports = router