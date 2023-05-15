var express = require('express');
var router = express.Router();
var Contracts = require('../controllers/contracts')

//GET /contracts and /contracts?year=YYYY and GET /contracts?inst=AAA
router.get('/contracts', function(req, res, next) {
  if(req.query.year){
    Contracts.contractsYear(req.query.year)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  else if(req.query.inst){
    Contracts.contractsInstitution(req.query.inst)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  else{
    Contracts.listContracts()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
});

//GET /contracts/courses
router.get('/contracts/courses', function(req, res, next) {
  Contracts.listContractsCourse()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//GET /contracts/institutions
router.get('/contracts/institutions', function(req, res, next) {
  Contracts.listContractsInstitution()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//GET /contracts/:id
router.get('/contracts/:id', function(req, res, next) {
  Contracts.contractDetails(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//POST /contracts
router.post('/contracts', function(req, res, next) {
  Contracts.addContract(req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//DELETE /contracts/:id
router.delete('/contracts/:id', function(req, res, next) {
  Contracts.deleteContract(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

module.exports = router;
