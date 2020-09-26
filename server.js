const express = require('express')
const bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let userRouter = require('./router/userRouter')

app.use('/user', userRouter)

app.listen(8000, () => {
    console.log('server start')
})

