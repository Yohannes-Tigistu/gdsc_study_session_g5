const weight= prompt("enter weight");
const height= prompt("enter height");
const BMI = parseFloat(weight/(height*height)).toFixed(2);
alert("Your BMI is: "+BMI);