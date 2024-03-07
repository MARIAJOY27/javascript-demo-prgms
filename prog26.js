//write a program to display the numbers whose exponential is in the range of 8-36
//here the user can input the exponential value(power)
//power=2
//1**2=1, 2**2=4, 3**2=9, 4**2=16, 5**2=25, 6**2=36, 7**2=49 //output will be 3,4,5,6

pow=3
low=8
up=36
num = 1
while (num<=36) {
    if(low<=num**pow && num**pow<=up){
        console.log(num);
    }
    num++
}