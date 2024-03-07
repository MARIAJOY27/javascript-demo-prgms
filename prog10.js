//write a prgm to swap btw 2 numbers

num1 = 10
num2 = 20
console.log(`initial value of num1 is ${num1} and num2 is ${num2}`);
//using assignment operator
/*var x = num1 //10
var num1 = num2 //20
var num2 = x //10
console.log(`After swapping, value of num1 is ${num1} and num2 is ${num2}`);*/

//using arithmetic operator
num1 = num1 + num2 //10+20=30
num2 = num1 - num2 //30-20=10
num1 = num1 - num2 //30-10=20
console.log(`After swapping, value of num1 is ${num1} and num2 is ${num2}`);