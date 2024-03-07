// for loop in an array

let fruits = ['Apple','Orange','Kiwi','Pineapple']

console.log(fruits);

console.log('-----------------------------------');
//access each element one by one
for(i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}

console.log('-----------------------------------');
   /*OR using for in*/
for(let y in fruits){
    console.log(fruits[y]); //printing y alone will give index positions
}   

console.log('-----------------------------------');
     /* for of method*/
for (let z of fruits){
    console.log(z);
}     
console.log('-----------------------------------');

let names = ['anil','mathew','amala','ram','amal']
for(i=0;i<=names.length-1;i++){
    console.log(names[i]);
}