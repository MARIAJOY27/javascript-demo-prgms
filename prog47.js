// w.a.p to find the cube of a given number using function

function cube(num){
    const cub=num*num*num //num**3
    console.log(`Cube of ${num} is ${cub}`);
}

cube(4)

console.log('----------------------------');

//w.a.p to check whether given number is odd/even

function check(num){
    return num%2==0?'even':'odd'
}
console.log(check(9))
        
console.log('---------------------');

// w.a.p to check a given number is positive/negative

function positive(num){
    return num>0?'positive':num<0?'negative':'neither positive nor negative'
}
console.log(positive(-6));