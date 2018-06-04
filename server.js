const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/static'));


app.get('/',function(req,res){
      res.render('artledger');
});

app.listen(PORT, function() {
  console.log('Listening on port 8080!');
});
