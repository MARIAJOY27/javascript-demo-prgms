//nested array

//[id, name, designation, location, salary, experience]
employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log('Employee names are: ');
for(emp of employee){
   console.log(emp[1]);
}


console.log('------------------------------------');
//print total numbers of employee
 console.log(`Total number of employees:${employee.length}`);



 console.log('------------------------------------');
//print developer employee details
console.log('Developer employee details');
for(emp of employee){
   if(emp[2]=='developer'){
    console.log(emp);
   }
}

console.log('------------------------------------');
//print employee whose salary > 30000
for(emp of employee){
    if(emp[4]>30000){
        console.log(emp[1]);
    }
}


console.log('------------------------------------');
// print details of employee Laisha
console.log('details of employee Laisha');
for(emp of employee){
    if(emp[1]=='Laisha'){
        console.log(emp);
    }
}

console.log('------------------------------------');
//sort employee based on their salary in descending order
//sort((a,b)=>b-a)=>number
console.log('sort employee based on their salary in descending order');
console.log(employee.sort((emp1,emp2)=>emp2[4]-emp1[4]))


console.log('------------------------------------');
//sort employee based on their experience in ascending order
console.log('sort employee based on their experience in ascending order');
console.log(employee.sort((a,b)=>a[5]-b[5]));


console.log('------------------------------------');
//print the employ name who have the highest salary
console.log('employ name who have the highest salary');
highestSalary =employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(highestSalary[0][1]);
