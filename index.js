
const PORT = process.env.PORT || 5000 // this is very important

const express = require('express');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const apiRouter = require('./apiRouter').router;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function (req,res){
	res.setHeader('Content-Type','text/html');
	res.status(200).send('<h1> Bonjour </h1>')
});

app.use('/api/',apiRouter)
app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})