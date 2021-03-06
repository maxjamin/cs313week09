const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/response', (req, res) => res.render('pages/response'))

  .get('/getMail', (req, res) => {

  	var postalType = req.query.postalType;
  	var weightOfItem = req.query.weightOfItem;
  	calculateRate(res, postalType,weightOfItem);

  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


function calculateRate(res, postalType, weightOfItem) {
		console.log("Starting calculateRate");

		var weight = weightOfItem;
		var typeOf = postalType;
		var cost = 0;

		//letter Stamped 
		if(typeOf == "stamped"){
			console.log("letter is stamped");

			if(weight <= 1) { cost=0.55; }
			else if(weight > 1 && weight <= 2) {cost=0.7; }
			else if(weight > 2 && weight <= 3) {cost=0.85; }
			else if(weight > 3 && weight <= 3.5) {cost= 1.00; }
			else {cost = "To much weight"; }
		}
		//letter metered
		if(typeOf == "metered"){ls
			console.log("letter is metered");

			if(weight <= 1) { cost=0.50; }
			else if(weight > 1 && weight <= 2) {cost=0.65; }
			else if(weight > 2 && weight <= 3) {cost=0.80; }
			else if(weight > 3 && weight <= 3.5) {cost= 0.95; }
			else {cost = "To much weight"; }
		}
		//letter Large Envelopes
		if(typeOf == "flats"){
			console.log("letter is flats(Large E)");

			if(weight <= 1) { cost=1; }
			else if(weight > 1 && weight <= 2) {cost=1.15; }
			else if(weight > 2 && weight <= 3) {cost=1.30; }
			else if(weight > 3 && weight <= 4) {cost= 1.45; }
			else if(weight > 4 && weight <= 5) {cost= 1.60; }
			else if(weight > 5 && weight <= 6) {cost= 1.75; }
			else if(weight > 6 && weight <= 7) {cost= 1.90; }
			else if(weight > 7 && weight <= 8) {cost= 2.05; }
			else if(weight > 8 && weight <= 9) {cost= 2.20; }
			else if(weight > 9 && weight <= 10) {cost= 2.35; }
			else if(weight > 10 && weight <= 11) {cost= 2.50; }
			else if(weight > 11 && weight <= 12) {cost= 2.65; }
			else if(weight > 12 && weight <= 13) {cost= 2.80; }
			else {cost = "To much weight"; }
		}
		//first Class
		if(typeOf == "firstClass"){
			console.log("First class packages");

			if(weight <= 4) { cost=3.66; }
			else if(weight > 4 && weight <= 8) {cost=4.39; }
			else if(weight > 8 && weight <= 12) {cost=5.19; }
			else if(weight > 12 && weight <= 13) {cost=5.71; }
			else {cost= "To much weight";}
			
		}

		var par = {weight: weightOfItem, typeOf: postalType, cost: cost};
		res.render('pages/response', par);
}