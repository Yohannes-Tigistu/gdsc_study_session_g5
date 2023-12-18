const weight= prompt("enter weight");
const height= prompt("enter height");
//parsefloat and tofixed function help to reduce the decimal place of the bmi to 2.
const BMI = parseFloat(weight/(height*height)).toFixed(2);
alert("Your BMI is: "+BMI);