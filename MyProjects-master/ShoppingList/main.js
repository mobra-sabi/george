

var adButton = document.querySelector("#but1");
var input = document.querySelector("#inputText");
//if( input.value !== ""){
adButton.addEventListener("click", AddItem);



function AddItem()
{
        
    var sp = document.createElement("span");
    sp.textContent = returnedText;

    //var input = document.querySelector("#inputText");
    var returnedText = input.value;
    //console.log("am scris " + returnedText);

    var items = document.querySelector("#shopingList");
    var item = document.createElement("li");
    
    //ramane textul
    item.textContent=returnedText;
    //
    //items.appendChild(item);


    // creaza buton de delete
    var del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", DeleteElement);
    
   
    //buton edit
    var edit = document.createElement("button");
    
    edit.textContent = "Edit";
    edit.addEventListener("click", EditItem);
    item.appendChild(sp);
    item.appendChild(del);
    item.appendChild(edit);
    //adauga <li>-ul la <ul>
    items.appendChild(item);


}

function DeleteElement(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
    console.log("deleted");
}


function EditItem(){

    this.parentNode.firstChild.style.display = "none";
    
   

}




