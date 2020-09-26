const express = require('express')

var app = express()

app.use('/', (req, res, next) => {
    console.log("22222222222222222222222")
    let { token } = req.query
    if (token) {
        next()
    } else {
        res.send('no token')
    }
})

app.get('/user/test', (req, res) => {
    console.log("111111111111111111111")
    res.send('add')
})

app.get('/test2', (req, res) => {
    res.send('add')
})

app.listen(8001, () => {
    console.log('server start')
})