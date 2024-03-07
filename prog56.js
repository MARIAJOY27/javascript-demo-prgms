let arr= [10,23,11,2,5,3]

//w..a.p to check whether 2 is present in the array
searchItem = 2
isPresent = false
for(let num of arr){
    if(searchItem==num){
        isPresent=true
    }
}
console.log(isPresent?'present':'not present');
console.log('-----------------------------');

