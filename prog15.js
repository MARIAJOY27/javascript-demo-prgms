//write a prgm to display FIZZ when the number is divisible by 3 and BUZZ if the no:is divisible by 5 and FIZZBUZZ when the no: is divisible by 15

num = 90

if(num%15==0){
    console.log('FIZZBUZZ');
}
else if(num%5==0){
    console.log('BUZZ');
}
else if(num%3==0) {
    console.log('FIZZ');
}
else{
    console.log('Not divisible by any of the numbers');
}