var ar1 = Array(4);
ar1[0] = "Jag";
ar1[1] = "Chat";
ar1[2] = "Win";
ar1[3] = "Don";

function displayArray(){

    var n = ar1.length;
    var ResultDiv = document.getElementById("ResultDiv");

    for (var i=0; i < n; i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Item " + (i + 1).toString() + " of " + n.toString() + " Elements of ar1 Array " + " is " + ar1[i];
        ResultDiv.appendChild(newDiv);
    }
}