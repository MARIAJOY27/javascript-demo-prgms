
//input [4,5,6]
//output [11,10,9]
//4+5+6=15//15-4=11//15-5=10//15-6=9

const arr=[4,5,6]
sum=0
x=[]
for(num of arr){
    sum+=num
}
for(i of arr){
    x.push(sum-i)
}
console.log(x);

