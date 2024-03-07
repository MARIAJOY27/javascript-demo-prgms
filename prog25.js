//write a prgm to check whether the given 3 digit  no:is armstrong or not
//153=1**3 + 5**3 + 3**3 = 1+125+27 =153

num = 153
sum = 0
temp=num
while (num>0) { //153>0 //15>0 //1>0
    ld = num%10 //153%10=3 // 15%10=5 //1%10=1
    sum = sum+ld**3 //0+3**3=27 // 27+5**3=152 //152+1**3=153
    num = Math.floor(num/10)//153/10=15 //15/10=1 // 1/10=0
}
console.log(sum);
console.log(temp==sum? 'Armstrong': 'Not armstrong');