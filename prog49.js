// call back function example

function greet(name){
    console.log(`Hai ${name}`);
    child()
}

function child(){
    console.log('inside the child function');
}

greet('Peter')

/* setTimeOut - a predefined method and also a callback function that provides time delay*/