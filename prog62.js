//Algorithm

let arr = [10,23,11,5,3,2]
searchkey=11
isPresent=false
low=0
up=arr.length-1
count=0
//1) sort the given array
arr.sort((a,b)=>a-b)
//6) repeat until low=up 
while(low<=up){
    count=count+1
    //2) find the mid = (low+up)/2
    mid=Math.floor((low+up)/2)
 //3) mid == searchitem - found
    if(arr[mid]==searchkey){
        isPresent=true
        break
    }  
//4)if mid>searchitem, 
else if(arr[mid]>searchkey){
     //up=mid-1
    up=mid-1
}
//5) mid<searchitem,
else{
    //low=mid+1
    low=mid+1
}
}
console.log(isPresent?`${searchkey} found`:`${searchkey} not found`);
console.log(count);

  
     
