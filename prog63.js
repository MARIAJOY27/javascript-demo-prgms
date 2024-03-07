//w.a.p to print the numbers from the given array whose sum is 6 using binary search

const arr = [2,3,4,5]//(2,4)
pairsum=6
isPresent=false
low=0
up=arr.length-1
count=0
arr.sort((a,b)=>a-b)
while(low<up){
    count=count+1
    cursum=arr[low]+arr[up]

    if(cursum==pairsum){
        isPresent=true
        console.log(`(${arr[low]},${arr[up]})`);
        low++
        up--
    }
    else if(cursum>pairsum){
        up--
    }
    else{
        low++
    }
}
!isPresent && console.log('No such pair');
console.log(count);