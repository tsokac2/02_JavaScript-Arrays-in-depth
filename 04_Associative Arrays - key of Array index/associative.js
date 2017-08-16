var emp = [];
emp["EmpNo"] = 1001;
emp["Name"] = "Jag";
emp["Sal"] = 5400,00;
emp["Dept"] = "IT Development";

function displayEmp(){

    var resultDiv = document.getElementById("resultDiv");

    for (k in emp) {                                //  k is equal array index of element emp[k] = element
        var newDiv = document.createElement("div");
        newDiv.innerHTML = k + ": " + emp[k];
        resultDiv.appendChild(newDiv);
    }
}


