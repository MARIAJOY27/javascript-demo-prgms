//w.a.p to print duplicate element from the given array
a = [10,20,30,20,30,40,50,60,10] //ie,duplicates are 10,20,30

isPresent = false
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            isPresent=true
            console.log(a[i]);
        }
    }
}
//console.log(isPresent?`present`:`not present`);
/* truthy operator */
!isPresent && console.log('not present');//when there is only if condition, here if not present, then print not present ,else it will print the duplicate no:s only