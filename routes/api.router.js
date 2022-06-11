const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req,res) => {
    res.send(`
    <div style="margin:0px;padding:0px;width:100%;height:100vh;display:grid;place-items:center;font-family:sans-serif">
        <div style="text-align:center">
            <h1>Bienvenido a la API</h1>
            <h3>Respuesta de prueba</h3>
            <p>Introduccion a la API RESTful</p>
            <p>${faker.lorem.paragraph()}
        </div>
    </div>
    `);
});

module.exports = router