let Employee = [{
    "IDName":"3001",
    "Name" :"Preeda",
    "department ":"department" ,
    "position": "HR",
    "salary":48000,
    "bonus":"A"
},{
    "IDName":"3002",
    "Name" :"Nat",
    "department ":"IT" ,
    "position": "System Engineer",
    "salary":57000,
    "bonus":"S"
},{
    "IDName":"3003",
    "Name" :"Phoovanay",
    "department ":"finance" ,
    "position": "Account",
    "salary":38000,
    "bonus":"A"
},{
    "IDName":"3004",
    "Name" :"Janjira",
    "department ":"department" ,
    "position": "HR",
    "salary":55000,
    "bonus":"B"
},{  
    "IDName":"3005",
    "Name" :"Panawat",
    "department ":"department" ,
    "position": "HR",
    "salary":13000,
    "bonus":"C"
},{ 
    "IDName":"3006",
    "Name" :"Thanaree",
    "department ":"finance" ,
    "position": "Account",
    "salary":41000,
    "bonus":"S"
},{ 
    "IDName":"3007",
    "Name" :"Nimaman",
    "department ":"department" ,
    "position": "HR",
    "salary":19000,
    "bonus":"A" 
},{ 
    "IDName":"3008",
    "Name" :"Gerati",
    "department ":"finance" ,
    "position": "Account",
    "salary":46000,
    "bonus":"C" 
},{  
    "IDName":"3009",
    "Name" :"Wannisa",
    "department ":"IT" ,
    "position": "System Engineer",
    "salary":28000,
    "bonus":"B" 
},{ 
}];

for (i = 0; i < employee.length; i++) {
  let bonusRate;
    //chk bonus
    if(employee[i].bonusRank=="S") bonusRate=1.8;
    else if(employee[i].bonusRank=="A") bonusRate =1.4;
    else if(employee[i].bonusRank=="B") bonusRate = 1.15;
    else if(employee[i].bonusRank=="C") bonusRate = 0.8;
    employee[i].bonus = employee[i].salary *bonusRate;
    employee[i].year = employee[i].salary*12 employee[i].
    if(employee[i].year<250000)employee[i].tax = 0;
    else if(employee[i].year<550000) employee[i].tax = employee[i].year*0.09;
    else if(employee[i].year<100000) employee[i].tax = employee[1].year*0.23;
    else employee[i].tax = employee[i].year*0.32;
    console.log(Employee[5])
}