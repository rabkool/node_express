const express = require('express')
const router = express.Router()


router.get('/index', (req, res) => {

    let data = [
        {
            title: '彼女募集中', content: '彼女募集中'
        }
    ]
    res.render('index', {data: data})
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