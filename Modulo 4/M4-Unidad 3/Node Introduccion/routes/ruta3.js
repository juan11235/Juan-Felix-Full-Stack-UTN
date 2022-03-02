var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.render('ruta3', { title: '3'});
})

module.exports = router;