//check whether given number is palindrome or not

num = 1219121
str = ''
temp = num

while(num>0){
   ld = num%10
   str = str+ld
   num = parseInt(num/10)
}
console.log(temp==str? 'Palindrome' : 'Not palindrome');