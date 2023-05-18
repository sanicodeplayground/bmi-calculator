function calculateBmi() {
  // let name = document.getElementById("name");
  let weight = document.getElementById("weight");
  let height = document.getElementById("height");
  let bmi = (weight / Math.pow(height, 2)).toFixed(1);

  if (bmi < 18.5) {
    return "You are underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "You are not overweight";
  } else {
    return "You are overweight";
  }

  // return bmi;
}
document.getElementById("bmi-score").innerHTML = bmi;

// calculateBmi();

/*var name = prompt("What is your name?");
var weight = prompt("What is your weight in kg?");
var height = prompt("How tall are you in meters?");
var bmi = (weight / (height ** 2)).toFixed(1);

if (bmi >= 18.5 && bmi <= 24.9) {
  alert(name + " your bmi is " + bmi + " and you are healty");
} else if (bmi > 25) {
alert(name + " your bmi is " + bmi + " and you are overweight");
} else {
  alert("Do you eat enough?");
}
*/

/*
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2); //(weight / )

  return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
*/
