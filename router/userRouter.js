const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')

router.post('/reg', (req, res) => {
    let { name, password } = req.body
    if (name && password) {
        User.insertMany({
            name: name,
            password: password,
        }).then((data) => {
            res.send({ err: 0, msg: 'reg ok' })
        }).catch((err) => {
            res.send({ err: -2, msg: 'reg failure' })
        })
    } else {
        return res.send({ err: -1, msg: 'emmmmm' })
    }
})

router.post('/login', (req, res) => {
    let { name, password } = req.body
    if (!name || !password) {
        return res.send({ err: -1, msg: 'emmmmm' })
    }
    User.find({
        name: name,
        password: password
    }).then((data) => {
        if (data.length > 0) {
            res.send({ err: 0, msg: 'success' })
        } else {
            res.send({ err: -2, msg: 'login failure' })
        }
    }).catch((err) => {
        res.send({ err: -1, msg: 'emmmmm' })
    })
})

router.get('/add', (req, res) => {
    res.send('add')
})

router.get('/del', (req, res) => {
    res.send('del')
})

module.exports = router