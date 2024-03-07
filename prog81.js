text = 'hai hello all hello world all'
//w.a.p to find the word count in the given text
//op ={hai:1,hello:2,all:2,world:1}

obj={}
words= text.split(' ')
/* console.log(words);*/

for(let word of words){
    /* console.log(word) */
    if(word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log(obj);

console.log('-------------OR------------');

wc={}
text.split(' ').forEach(element =>element in wc?wc[element]+=1:wc[element]=1)
console.log(wc);

