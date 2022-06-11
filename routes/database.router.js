const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.json([
        {
            username: 'mndrn',
            email: 'emmail@user.com',
            id: 12313241234,
            position: 1000,
            ip: '192.168.100.122'
        },
        {
            username: 'simon',
            email: 'emmail2@user.com',
            id: 12313241235,
            position: 1002,
            ip: '192.168.100.12'
        },
        {
            username: 'molly',
            email: 'emmail3@user.com',
            id: 12313241236,
            position: 1005,
            ip: '192.168.100.22'
        },
        {
            username: 'check',
            email: 'emmail4@user.com',
            id: 1983895403947,
            position: 1003,
            ip: '192.168.100.112'
        }
    ]);
});

module.exports = router