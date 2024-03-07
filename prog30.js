//write a prgm to create a loop which can iterate 10 times but can display only upto 5

for(i=1;i<=10;i++){
    console.log(i);
    if(i>=5){
        break     //here the for loop is affected by the break statement, not the if
    }
}