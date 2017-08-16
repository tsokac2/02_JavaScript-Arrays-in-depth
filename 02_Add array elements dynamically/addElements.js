var list = [];

function AddItemToExistingList(){
    var NoOfItems = list.length;

    list[NoOfItems] = document.getElementById("textValue").value;
    DisplayResults();
}

function DisplayResults() {
    var n = list.length;
    document.getElementById("itemsCount").innerHTML = "No. of items added: " + n.toString();
    var ItemsListDiv = document.getElementById("itemsList");

    while(ItemsListDiv.hasChildNodes()){
        ItemsListDiv.removeChild(ItemsListDiv.lastChild);
    }

    for(i=0; i < n; i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Item " + (i + 1).toString() +
                " of " + n.toString() + " is " + list[i];
        
        ItemsListDiv.appendChild(newDiv);
    }
}