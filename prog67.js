//w.a.p to find the square of each items in the given array
a=[10,11,12,13,14,15]

//using for of
for(num of a){
    console.log(num**2);
}

console.log('---------------------------');

//using forEach
a.forEach(item => {
    console.log(item**2);
});

console.log('---------------------------');

//using map()
sq=a.map((item1)=>item1**2)
console.log(sq);


console.log('----------cube of each items in an array--------------------');

//w.a.p to find the cube of each items in an array
a=[10,11,12,13,14,15]

/*a.forEach(item => {
    console.log(item**3);
});*/

sq=a.map((item1)=>item1**3)
console.log(sq);

console.log('--------------------------');

//w.a.p to create a new array with numbers<=13,then increment the number and for numbers>13,decrement the number
a=[10,11,12,13,14,15]
op = a.map((num)=>num<=13?num+1:num-1)
console.log(op);