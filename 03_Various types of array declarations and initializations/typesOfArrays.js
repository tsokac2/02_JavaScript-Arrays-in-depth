var ar1 = Array(4);
ar1[0] = "Jag_1";
ar1[1] = "Chad_1";
ar1[2] = "Don_1";
ar1[3] = "Marc_1";

var ar2 = Array("Jag_2","Chad_2","Don_2","Marc_2");

var ar3 = ["Jag_3","Chad_3","Don_3","Marc_3"];

var ar4 = [];
ar4[0]= "JAG_4"; 
ar4[1]= "DON_4"; 
ar4[2]= "CHAD_4"; 

var ar5 = ["Jag_5", 1985, true, 45.55, "Zero", 10000];

function displayArray(ary) {
    var n = ary.length;

    var resultDiv = document.getElementById("resultDiv");

    while(resultDiv.hasChildNodes()) {
        resultDiv.removeChild(resultDiv.lastChild);
    }

    for (i=0; i < n; i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Item " + (i + 1).toString() + " of " + n.toString() + " is " + ary[i];
        
        resultDiv.appendChild(newDiv);
    }
}
