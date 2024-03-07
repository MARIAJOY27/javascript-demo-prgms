const arr = [[2,49,[2,9,[5,7]]],[34,24],[3,5],[67,15]]
//w.a.p to find numbers greater than 25
for(num of arr){
    /*console.log(num);*/
    for(n of num){
        if(n>25){
            console.log(n);
        }
    }
}
console.log('------------------------------------');

//using flat function
a=arr.flat(3)
console.log(a);
for(n of a){
    if(n>25){
        console.log(n);
    }
}