const express = require('express')

const router = express.Router()

// /colors/
router.get('/', (req, res) => {
    res.json('GET /colors')
})

router.delete('/:name/css-style/:style', (req, res) => {
    res.json("DELETE /colors/:name/css-styles/:style")
})

router.post('/:name/css-style', (req, res) => {
    res.json("POST /colors/:name/css-styles")
})

// /colors/:name
router.get('/:name', (req, res) => {
    res.json('GET /colors/:name')
})




module.exports = router;