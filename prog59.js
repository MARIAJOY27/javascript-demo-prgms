p = [10,11,12,20,30]
q = [11,20,25,30,33]
//w.a.p to find the common numbers btw the given two arrays,ie,here 11,20,30

isFound = false
count=0
for(n of p){
    for(m of q){
        count++
        if(n==m){
            isFound=true
            console.log(n);
        }
    }
}
!isFound && console.log('No duplicate numbers');
console.log(count);