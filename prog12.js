//write a prgm to check a given number is positive / negative

num = 0
if(num<0){
    console.log(`${num} is a negative number`);
}
else if(num==0){
    console.log('0 is neither positive nor negative');
}
else{
    console.log(`${num} is a positive number`);
}

console.log('---------------------------------');

//ternary operator
num<0? console.log(`${num} is a negative number`) : num==0? console.log('0 is neither positive nor negative') :  console.log(`${num} is a positive number`)