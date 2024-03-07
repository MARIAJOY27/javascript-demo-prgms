//[ no, district,  +ve cases,  death rate,  cured rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve cases 
console.log('district having Highest +ve cases');
high=covid_data.reduce((case1,case2)=>case1[2]>case2[2]?case1:case2)
console.log(high[1]);
console.log('-----------------------------');

//2. district having Highest 1st dose vaccine
console.log('district having Highest 1st dose vaccine');
dist=covid_data.reduce((case1,case2)=>case1[5]>case2[5]?case1:case2)
console.log(dist[1]);
console.log('----------------------------');

//3. district having lowest death rate
console.log('district having lowest death rate');
dist=covid_data.reduce((case1,case2)=>case1[3]<case2[3]?case1:case2)
console.log(dist[1]);
console.log('---------------------------');

//4. sort data with +ve case in descending order
console.log('sorted data with +ve case in descending order');
covid_data.sort((case1,case2)=>case2[2]-case1[2]).forEach(element => {
    console.log(element);
})
console.log('--------------------------');

//5. is there any district with +ve cases > 15000
console.log('is there any districts with +ve cases > 15000');
pc=covid_data.some(item=>item[2]>15000)
console.log(pc?'yes':'no');
console.log('--------------------------');

//6. sort data with 1st dose vaccine ascending order
console.log('sorted data with 1st dose vaccine ascending order');
covid_data.sort((case1,case2)=>case1[5]-case2[5]).forEach(element => {
    console.log(element);
})
console.log('--------------------------');

//7. Print Thrissur details
console.log('Thrissur details');
thr=covid_data.find(item=>item[1]=='Thrissur')
console.log(thr);
console.log('-------------------------');

//8. Print total number of positive cases
console.log('total number of positive cases');
total= covid_data.map(item=>item[2]).reduce((t1,t2)=>t1+t2)
console.log(total);
console.log('-------------------------');

//9. Print total number of cured cases
console.log('total number of cured cases');
cured=covid_data.map(item=>item[4]).reduce((x1,x2)=>x1+x2)
console.log(cured);
console.log('-------------------------');

//10. Print cured cases in Idukki
console.log('cured cases in Idukki');
idukki=covid_data.find(item=>item[1]=='Idukki')
console.log(idukki[4]);
