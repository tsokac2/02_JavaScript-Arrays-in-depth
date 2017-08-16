var emp1 = [];
emp1["EmpNo"] = 1001;
emp1["Name"] = "Jag";
emp1["Sal"] = 5400,00;
emp1["Dept"] = "IT Development";

var emp2 = [];
emp2["EmpNo"] = 1002;
emp2["Name"] = "Chad";
emp2["Sal"] = 3900,00;
emp2["Dept"] = "Customer Services";

var emp3 = [];
emp3["EmpNo"] = 1003;
emp3["Name"] = "Don";
emp3["Sal"] = 8900,00;
emp3["Dept"] = "Activities";

var emp4 = [];
emp4["EmpNo"] = 1004;
emp4["Name"] = "Tom";
emp4["Sal"] = 18900,00;
emp4["Dept"] = "IT Departament";

var emps = [emp1, emp2, emp3, emp4]; //Nesting Arrays to form collections

function displayEmps(){

    var n = emps.length;

    var resultDiv = document.getElementById("resultDiv");

    for (i=0; i < n; i++){
        var emp = emps[i];
        
        for(k in emp){
            var newDiv = document.createElement("div");
            newDiv.innerHTML = k + ": " + emp[k];
            resultDiv.appendChild(newDiv);
        }

        var newBr = document.createElement("hr");
        resultDiv.appendChild(newBr);
    }
}


