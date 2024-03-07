//write a prgm to print all prime numbers btw 2-50

for(i=2;i<=50;i++){
    count=0
    for(j=2;j<i;j++){
        if(i%j==0){
            count=count+1
            break
        }
    }
    if(count==0){
        console.log(i);
    }
}

