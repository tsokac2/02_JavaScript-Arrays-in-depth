var ary = [10, "Jag", 30, 40, "Chat", true];

function displayAryResult(){
    var n = ary.length;

    document.getElementById("arryCount").innerHTML = "No. of Items: " + n.toString();

    var arryItems = document.getElementById("arryItems");

    while(arryItems.hasChildNodes()){    // while loop - removing all chiled item from a arryCount div in UI
        arryItems.removeChild(arryItems.lastChild);
    }

    for(i=0; i < n; i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Index " + i.toString() + 
        ", Item " + (i + 1).toString() + 
        " of " + n.toString() + " is " + ary[i];

        arryItems.appendChild(newDiv);
    }
}

function doArrayPush(){
    var v = document.getElementById("txtArryValue").value;
    ary.push(v);
    displayAryResult();
}

function doArrayPop(){
    ary.pop();
    displayAryResult();
}

function doArrayUnShift(){
    var v = document.getElementById("txtArryValue").value;
    ary.unshift(v);
    displayAryResult();
}

function doArrayShift(){
    ary.shift();
    displayAryResult();
}

window.onload = displayAryResult;
