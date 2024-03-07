//w.a.p to find the first recursive letter

pattern='ABCBACCBAA' //op=B

characters = Array.from(pattern)
/* console.log(characters);*/
obj={}

for(let char of characters){
    if(char in obj){
       console.log(`first recursive letter is ${char}`);
       break
    }
    else{
        obj[char]=1
    }
}
