// *
// * *
// * * *
// * * * *

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        if(col<=row){
            str=str+' *'
        }
    }
    console.log(str);
}

console.log('--------------------');


for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    
    console.log(str);
}
