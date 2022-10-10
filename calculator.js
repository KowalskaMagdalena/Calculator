const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res){
  console.log(req.body);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + String(result));
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post("/bmicalculator", function(req, res){
  console.log(req.body);

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  console.log(weight);
  console.log(Math.pow(height,2));
  var bmi = weight / Math.pow(height,2);
  console.log(bmi);
  res.send("Your BMI is " + bmi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});