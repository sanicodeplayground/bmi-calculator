function calculateBmi() {
  let weight = parseFloat(document.getElementById("weight_kilograms").value);
  let height =
    parseFloat(document.getElementById("height_centimeters").value) / 100; //convert cm to m

  let bmi = (weight / Math.pow(height, 2)).toFixed(1);

  if (bmi < 18.5) {
    return (
      "Your BMI is: " +
      bmi +
      '<br><span class="underweight"> You are underweight</span>'
    );
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return (
      "Your BMI is: " + bmi + '<br><span class="fine"> You are fine</span>'
    );
  } else {
    return (
      "Your BMI is: " +
      bmi +
      '<br><span class="overweight"> You are overweight</span>'
    );
  }
}

function showBmi() {
  document.getElementById("bmi-score").innerHTML = calculateBmi();
}
