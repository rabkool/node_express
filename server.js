const express = require('express')
const path = require('path')
const db = require('./db/connect.js')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, './static')))

let userRouter = require('./router/userRouter')

app.use('/user', userRouter)

app.listen(80, () => {
    console.log('server start')
})