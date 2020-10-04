const express = require('express')
const path = require('path')
const db = require('./db/connect.js')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// ejs
app.set('view engine', 'ejs')

app.set('views', './static/views')

app.use(express.static(path.join(__dirname, './static')))

let userRouter = require('./router/userRouter')

let router = require('./router/router')

app.use('/user', userRouter)

app.use(router)

app.post('/decodebf', (req, res) => {
    let { result } = req.body
    if (!result) {
        return res.send({ err: -1, msg: '入力してくださいよ。空はダメだよ' })
    }
    if (typeof result == 'string') {
        try {
            buf = Buffer.from(JSON.parse(result))
            if (Buffer.isBuffer(buf)) {
                rabkool = buf.toString()
            } else {
                return res.send({ err: -1, msg: 'Bufferを入力してくださいよ' })
            }
        } catch (e) {
            return res.send({ err: -1, msg: 'Bufferを入力してください' })
        }
    }
    return res.send({ err: 0, msg: rabkool })
})

app.listen(80, () => {
    console.log('server start')
})