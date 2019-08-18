const express = require('express');
const router = express.Router();
const result = require('../aqiCalculation/index')
var asyn = require('async');
const Thread = require('../models/Thread');
const ValidThreadInputs = require('../validation/thread');

router.post('/createThreads', (req, res) => {
  const { errors, isValid } = ValidThreadInputs(req.body);
  if(!isValid) {
      return res.status(400).json(errors);
  }
  const newThread = new Thread({
      pname: req.body.pname,
      pvalue: req.body.pvalue,
      cname: req.body.cname,
      cemailid: req.body.cemailid
  });
   newThread.save().then(thread => {
    result.AQICalculator.getAQIResult(req.body.pname, req.body.pvalue).then((result) => {
        res.json(result)
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {console.log(err)})
})

module.exports = router;