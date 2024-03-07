     //Nested function

function parent() {
    const parent = 'parent'
    console.log(`variable inside parent function is : ${parent}`);
   /* console.log(`variable inside child function is : ${childvariable}`);*/ //closure property =>shows error

    function child(){
        const childvariable = 'child'
        console.log(`variable inside child function is : ${childvariable}`);
        console.log(`variable inside parent function is : ${parent}`); //closure property
    }
    child()
}

parent()