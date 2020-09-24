const express = require('express')

const app = express()

app.get('/user/login', (req, res) => {
    console.log('emmmm')
    let { a, aa } = req.query
    if (a === '1' && aa === '1') {
        res.send({ err: 0, msg: 'ok' })

    } else {
        res.send({ err: -1, msg: 'emmmmm' })
    }
})
app.listen(8000, () => {
    console.log('server start')
})