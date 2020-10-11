const express = require('express')
const router = express.Router()

router.post('/decodebf', (req, res) => {
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
            return res.send({ err: -1, msg: 'Buffer型を入力してください' })
        }
    }
    return res.send({ err: 0, msg: rabkool })
})

module.exports = router