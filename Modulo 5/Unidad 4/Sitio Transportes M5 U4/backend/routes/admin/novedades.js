var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades', { 
    layout: 'admin/layout',
    usuario: req.session.nombre
   });
});

module.exports = router;