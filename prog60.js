//w.a.p to print the numbers from the given array whose sum is 6

const arr = [2,3,4,5]//(2,4)

sum=6
isPresent=false
count=0
for(i=0;i<=arr.length-1;i++){
    count++
    for(j=i+1;j<=arr.length-1;j++){
        if(arr[i]+arr[j]==sum){
            isPresent=true
            console.log(`(${arr[i]},${arr[j]})`);
        }
    }
}
!isPresent && console.log('No such pair');
console.log(count);

console.log('-------------------------------');
