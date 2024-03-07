var car ={
    name:"boleno",
    model:"hatch back",
    manufacturer:"maruti",
    price:"10 lakh"
}

//display car name and its manufacturer name and price
console.log(`car name is ${car.name} , Manufacturer is ${car.manufacturer} and price is ${car.price}`);

//check model key is available in car, if yes then display its value
'model' in car?console.log(`car model is ${car.model}`):console.log('no such key')


//add "variant" key to car with value as "manual"
car["variant"]=["manual"]
console.log(car);


//insert another value to "variant" key to car with value as "automatic"
car["variant"].push("automatic")
console.log(car);

//add "colour" key to car with value as "red","white","blue"
car["colour"]=["red","white","blue"]
console.log(car);