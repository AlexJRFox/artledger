const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));


app.get('/',function(req,res){
      res.render('artledger');
});

app.listen(8080, function() {
  console.log('Listening on port 8080!');
});
