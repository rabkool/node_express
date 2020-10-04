const express = require('express')
const router = express.Router()
let { resolve } = require('path')


router.get('/index', (req, res) => {

    let data = [
        {
            title: '彼女募集中', content: '彼女募集中'
        }
    ]
    res.render('index', { data: data })
})

router.get('/login', (req, res) => {
    res.sendFile(resolve(__dirname, '../static/login.html'))
})

router.get('/buffer', (req, res) => {
    res.sendFile(resolve(__dirname, '../static/buffer.html'))
})

router.get('/register', (req, res) => {
    res.sendFile(resolve(__dirname, '../static/register.html'))
})

router.get('/recruit', (req, res) => {
    res.sendFile(resolve(__dirname, '../static/recruit.html'))
})

module.exports = router