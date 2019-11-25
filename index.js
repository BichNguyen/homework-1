// Homework 1 
//Compute and compare BMI 
// Declear variables 
var number1, number2, number3, number4;
var BMI1, BMI2;

// Enter user input & convert strings to integers
number1 = parseInt(prompt('Enter Tom\'s mass in lbs')); 
number2 = parseInt(prompt('Enter Tom\'s height inches')); 
number3 = parseInt(prompt('enter Jerry\'s mass in lbs')); 
number4 = parseInt(prompt('Enter Jerry\'s height in inches')); 

// Operations 
BMI1 = number1 / (number2 * number2);
BMI2 = number3 / (number4 * number4); 

if(BMI1 >= BMI2)
{ 
   var x = true; 
}
else {
  x = false;
}


//print the result 
console.log('Is Tom\'s BMI higher than that from Jerry?' + x);

// Homework 2 
//Calculate the average grade
// Variables

var exam1, exam2, final, avg; 

// User input 

exam1 = parseInt(prompt('Enter the exam 1\'s result')); 
exam2 = parseInt(prompt('Enter the exam 2\'s result')); 
final = parseInt(prompt('Enter the final ')); 

avg = (exam1 + exam2 + final *2) / 4 ; 

console.log(avg); 

switch(true)  {
  case avg  >= 90:
    console.log('A'); 
    break; 
  case avg < 90 && avg >= 80: 
    console.log ('B'); 
    break;
  case avg < 80 && avg >= 70:
    console.log ('C'); 
    break; 
  case avg < 70 && avg >= 60:
    console.log('D'); 
    break; 
  case avg < 60 && avg >= 50:
    console.log('E');
    break;  
  default: 
    console.log('F');  
}
