//w.a.p to display all armstrong numbers  btw 8-500


for(i=8;i<=500;i++){
     sum=0
     numberOfDigits = i.toString().length;
     temp=i
     while(temp>0){
        ld = temp%10 
        sum = sum+ld**numberOfDigits
        temp = Math.floor(temp/10)
     }
     if(sum==i){
        console.log(i);
     }
}