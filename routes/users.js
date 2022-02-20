var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Morjes")
});

router.get ('/tesmaus',function(request,response)
{
  response.send("Hei!");
});

router.get('/esim/:name',function(request,response)
{
        response.send('Morjesta '+request.params.name);
});

router.get('/esim2/:firstName/:lastName',function(request, response)
{
        response.send('Moi taas '+request.params.firstName+" "+request.params.lastName);
});

router.get('/esim3/:firstName&:lastName',function(request, response)
{
       response.send('Terveeks '+request.params.firstName+" "+request.params.lastName);
});


router.post('/',function(request,response)
{
        response.send(request.body);
});

module.exports = router;

