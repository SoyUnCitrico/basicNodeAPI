const express = require('express');
const registrosRouter = require('./register.router');
const apiRouter = require('./api.router');
const dbRouter = require('./database.router');

function routerApi (app) {
    const router = express.Router();
    app.use('/ccd/',router);
    router.use('/api', apiRouter);
    router.use('/registro', registrosRouter);
    router.use('/database', dbRouter);
}

module.exports = {routerApi};