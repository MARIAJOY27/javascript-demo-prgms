//write a prgm to find the 2nd largest number from the given 3 no:s and sort the given 3 no:s in descending order

num1 = 100
num2 = 200
num3 = 300

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest number is ${num2}`);
        console.log(`Descending order is ${num1},${num2},${num3}`);
    }else{
        console.log(`second largest number is ${num3}`);
        console.log(`Descending order is ${num1},${num3},${num2}`);
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`second largest number is ${num1}`);
        console.log(`Descending order is ${num2},${num1},${num3}`);
    }
    else{
        console.log(`second largest number is ${num3}`);
        console.log(`Descending order is ${num2},${num3},${num1}`);
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`second largest number is ${num1}`);
        console.log(`Descending order is ${num3},${num1},${num2}`);
    }
    else{
        console.log(`second largest number is ${num2}`);
        console.log(`Descending order is ${num3},${num2},${num1}`);
    }
}
else{
    console.log('All numbers are equal');
}