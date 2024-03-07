// * * * * *
// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// * * * * *      

for(row=1;row<=8;row++){
    str=''
    for(col=1;col<=5;col++){
        if(col==1 || col==5 || row==1 || row==8){
            str=str+'*'
        }
        else{
            str=str+' '
        }
    }
    console.log(str);
}
console.log('----------------------------------');
//1
//0 1
//1 0 1
//0 1 0 1

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        if(row==col || row-col==2){
            str=str+'1'
        }
        else if(row-col==1 || row-col==3){
             str=str+'0'
        }
        else{
            str=str+' '
        }
    }
    console.log(str);
}

         //OR
for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        if((row+col)%2==0){
            str=str+1
        }
        else{
            str=str+0
        }
        console.log(str);
    }
}         