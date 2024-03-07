a=[10,5,2,13,58,1]
//w.a.p to find the highest number
highest = a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(highest);

//w.a.p to find the smallest number
smallest = a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(smallest);

//w.a.p to find the sum of all numbers in given array
sum = a.reduce((num1,num2)=>num1+num2)
console.log(sum); 