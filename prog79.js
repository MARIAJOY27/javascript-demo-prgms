   //OBJECT DATATYPE

/*p=[1000,'Neel','developer','kochi',25000,3] //array
console.log(typeof(p));//object datatype*/

employee = {     //object representation of above array
    EmpId:1000,
    EmpName:'Neel',
    Desg:'Developer',
    Location:'Kochi',
    
}
console.log(employee);
//console.log(typeof(employee));  //object datatype
console.log(employee["Desg"]); //access particular value, not applicable for varying values
console.log(employee.Desg);

employee["Salary"]=25000
console.log(employee);

Object.assign(employee,{'Experience':3})
console.log(employee);

Object.assign(employee,{isVaccinated:true})
console.log(employee);

delete employee.isVaccinated
console.log(employee);

//update name as Neel John
employee["EmpName"]='Neel John'
console.log(employee);

employee["Experience"]+=2
console.log(employee);

//to access all keys
for(let key in employee){
    console.log(key);
}
console.log('------------------------');
//w.a.p to check whether location key is present or not
/*if('Location' in employee){
    console.log('present');
}
else{
    console.log('not present');
}*/
    //or
console.log('Location' in employee?'present':'not present');    
console.log('-------------------------');

//w.a.p to check whether gender is present in the object employee. if present print 'present' else add new key as gender with value as male
'Gender' in employee?console.log('present'):(employee['Gender']='male',console.log(employee))  
