const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PDFDocument = require("pdfkit");
const fs = require("fs");


app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));



app.get('/',function(req,res){
      res.render('artledger');
});

app.post('/form',function(req,res){
      console.log(req.body);

});

app.get('/pdf',function(req,res){
  const doc = new PDFDocument();
  // const stream = doc.pipe(blobStream());

  doc.pipe = fs.createWriteStream('output.pdf');
  doc.pipe = res;


  doc.addPage()
     .fontSize(25)
     .text('Here is some vector graphics...', 100, 100)

  doc.save()
     .moveTo(100, 150)
     .lineTo(100, 250)
     .lineTo(200, 250)
     .fill("#FF3300")

  doc.scale(0.6)
     .translate(470, -380)
     .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
     .fill('red', 'even-odd')
     .restore()

  doc.addPage()
     .fillColor("blue")
     .text('Here is a link!', 100, 100)
     .link(100, 100, 160, 27, 'http://google.com/')

  doc.end();

//  stream.on('finish', function() {
//    iframe.src = stream.toBlobURL('application/pdf');
//  });

});






app.listen(8080, function() { // Set app to listen for requests on port 3000
  console.log('Listening on port 8080!'); // Output message to indicate server is listening
});
