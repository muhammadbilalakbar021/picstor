var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/getUser', function(req, res, next) {
  try {
    console.log(req.body)
    res.status(200).send({message:"pass"})
  } catch (err) {
    res.status(400).send({Error: err, status:400})
  }
});

module.exports = router;
