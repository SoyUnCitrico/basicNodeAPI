const express = require('express');
const RegisterService = require('../services/register.service')

const router = express.Router();
const service = new RegisterService();

// GETS
router.get('/', async (req,res)=>{
    const registers = await service.find();
    res.json(registers);

});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const register = await service.findOne(id);
    res.json(register);
});

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
router.post('/',async (req,res) => {
    const body = req.body;
    const newRegister = await service.create(body);
    res.status(201).json({
        message: "Creado: ",
        data: newRegister 
    });
});


router.patch('/:id',async (req,res)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const register = await service.update(id, body);
        res.json(register)
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
    }
})

router.delete('/:id', async (req,res)=>{
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response) 
})

module.exports = router