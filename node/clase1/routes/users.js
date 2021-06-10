var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/all', (req, res) => {
  res.send('todos los usuarios 😎');
})

module.exports = router;
