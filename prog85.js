products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
products.forEach(item => {console.log(item.pName)});
console.log('---------------------------------');

//2. print all mobile details whose display is lcd
products.filter(item=>item.display=='lcd').forEach(lcd=>console.log(lcd))
/* console.log(lcd);*/
console.log('---------------------------------');

//3. print 5g mobile phone name
products.filter(item=>item.band=='5g').forEach(band=>console.log(band.pName))
console.log('---------------------------------');

//4. sort mobile based on price
products.sort((a,b)=>b.price-a.price).forEach(item=>console.log(item.pName))
console.log('---------------------------------');

//5. print costly mobile
high=products.reduce((mb1,mb2)=>mb1.price>mb2.price?mb1:mb2)
console.log(high.pName);

console.log('---------------------------------');

//6. print low cost mobile
low=products.reduce((mob1,mob2)=>mob1.price<mob2.price?mob1:mob2)
console.log(low.pName);
