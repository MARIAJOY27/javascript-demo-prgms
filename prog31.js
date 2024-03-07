//check whether a given number is prime or not

num = 5
isPrime=true
for(i=2;i<num;i++){
    if(num%i==0){
        isPrime=false
        break
    }
}
console.log(isPrime?'is a prime number': 'not a prime number');