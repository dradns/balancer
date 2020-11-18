var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/testPath', async function(req, res, next) {
  await setTimeout(()=>res.send('ourBusyResponce'+ `${process.env.PORT}`),5000);
});

module.exports = router;
