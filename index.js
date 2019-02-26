const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/response', (req, res) => res.render('pages/response'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/compute', calculateRate);


function calculateRate() {
		console.log("Starting calculateRate");

}