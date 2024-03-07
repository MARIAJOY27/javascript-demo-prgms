//w.a.p to find gcd/hcf of given 2 numbers
//12 - 1 2 3 4 6 12
//28 - 1 2 4 7 14 28
//common factors of 12,28 is 1 2 4
//hcf = 4

num1=12
num2=24
gcd=0
for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
       gcd=i //1  2  4
    }
}
console.log(gcd); //4 from line 12 will be printed because it is the last value assigned to gcd