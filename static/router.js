const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

router.get('/buffer', (req, res) => {
    res.sendFile(__dirname + '/buffer.html')
})

router.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html')
})

router.get('/recruit', (req, res) => {
    res.sendFile(__dirname + '/recruit.html')
})

module.exports = router