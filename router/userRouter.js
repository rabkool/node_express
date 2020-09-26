var express = require('express')
var router = express.Router()

router.get('/login', (req, res) => {
    console.log('emmmm')
    let { a, aa } = req.query
    if (a === '1' && aa === '1') {
        res.send({ err: 0, msg: 'ok' })

    } else {
        res.send({ err: -1, msg: 'emmmmm' })
    }
})

router.post('/reg', (req, res) => {
    console.log(req.body)

    res.send({ err: 1, msg: '11111111111111111' })
})

router.get('/add', (req, res) => {
    res.send('add')
})

router.get('/del', (req, res) => {
    res.send('del')
})

module.exports = router