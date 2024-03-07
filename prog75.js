//w.a.p to check whether the given number is a mobile number or not.

mobile='9876543210'
console.log(mobile.length==10?'valid mobile number':'invalid mobile number');

const validate = (num)=>{
    return num.length==10?'valid mobile number':'invalid mobile number'
}
console.log(validate('8765004321'));
console.log('-----------------------------');

//w.a.p to check whether an email id is a gmail or not.
mail='alen@gmail.com'
console.log(mail.endsWith('@gmail.com')?'valid mail id':'invalid mail id');
console.log('---------------------------');

//w.a.p to check whether a given string starts with letter q or not
word='sfbvjhb'
console.log(word.startsWith('q') || word.startsWith('Q')?'Starts with letter q':'Not start with q');