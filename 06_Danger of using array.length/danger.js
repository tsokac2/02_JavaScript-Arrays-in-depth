var emp = [];
emp["EmpNo"] = 1001;
emp["Name"] = "Jag";
emp["Sal"] = 5400,00;
emp["Dept"] = "IT Development";

function btnClick_1(){ // returns number of items in emp array - 0
   alert(emp.length);
}

var ary2 = [];
ary2[3] = "something"; 

function btnClick_2(){ // returns number of items in emp array - 4
   alert(ary2.length);
}

var ary3 = [];
ary3[3] = "something";
ary3["Name"] = "Chad";

function btnClick_3(){ // returns number of items in emp array - 4
   alert(ary2.length);
}

