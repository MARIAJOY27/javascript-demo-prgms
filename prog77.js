word ='Good Evening All'
//w.a.p to print all vowels in the given string

vowel = ['a','e','i','o','u','A','E','I','O','U']
p=[]

characters= word.split('')
for(let char of characters){
    if(vowel.includes(char) && !p.includes(char)){ //!p.includes(char) is added to not print repeated vowel letters in the string
        p.push(char)
    }
}
console.log(p);

console.log('--------------------------');
//no repetition of vowels,all small letters

vowel = ['a','e','i','o','u','A','E','I','O','U']
p=[]

characters= word.toLowerCase().split('')
console.log(characters);

for(let char of characters){
    if(vowel.includes(char) && !p.includes(char)){ //!p.includes(char) is added to not print repeated vowel letters in the string
        p.push(char)
    }
}
console.log(p);

console.log('---------------------');

q=[]
a=Array.from(word.toLowerCase()).filter(item=>(vowel.includes(item) && !q.includes(item)) && q.push(item))
console.log(a);

