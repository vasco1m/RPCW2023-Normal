var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:15015/contracts')
    .then(dados => {
      res.render('index', { contracts: dados.data });
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

/* GET contract details page. */
router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:15015/contracts/' + req.params.id)
    .then(dados => {
      res.render('contract', { contract: dados.data });
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

/* GET contract details page. */
router.get('/inst/:nipc', function(req, res, next) {
  axios.get('http://localhost:15015/contracts?inst=' + req.params.nipc)
    .then(dados => {
      res.render('institution', { contracts: dados.data });
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

module.exports = router;
