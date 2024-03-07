//w.a.p to find number count from the given array
arr = [10,20,50,20,30,80,10,20,70,50,20,10]
//op = {10:3,20:4,50:2,30:1,80:1,70:1}

obj={}
for(let num of arr){
    /*console.log(num);*/
    if(num in obj){
        obj[num]+=1
    }
    else{
        obj[num]=1
    }
}
console.log(obj);

console.log('----------------------');

ob={}
arr.map(item=>item in ob?ob[item]+=1:ob[item]=1)
console.log(ob);