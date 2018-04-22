var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([{
      id: 1,
      name: 'Stephen'
    },
    {
      id: 2,
      name: 'Bubo'
    }
  ])
});

module.exports = router;