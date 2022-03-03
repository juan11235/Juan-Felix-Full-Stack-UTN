var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.send('Esta es la ruta 1');
})

module.exports = router;