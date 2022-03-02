var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.render('ruta2', { title: '2'});
})

module.exports = router;