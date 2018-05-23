

var adButton = document.querySelector("#but1");
var input = document.querySelector("#inputText");
//if( input.value !== ""){
adButton.addEventListener("click", AddItem);
//}
//var adButton = document.querySelector("#but2");

//  document.getElementById("inputText");
//     input.addEventListener("keyup", function(event) {
    
//         var item = document.createElement("li");
//          item.textContent = returnedText;
//         items.appendChild(item);
//          var localButton = document.createElement("button1");
//         localButton.setAttribute("id", "localButton1");
//          localButton.textContent = "Edit";
//          item.appendChild(localButton);
//          localButton.addEventListener("click", DeleteElement);
//         input.value = "";
    


//    // if (event.keyCode === 13) {
//       //  document.getElementById("#but2").click();
//    // }
// });



function AddItem()
{
    //var input = document.querySelector("#inputText");
    var returnedText = input.value;
    //console.log("am scris " + returnedText);

    var items = document.querySelector("#shopingList");
    var item = document.createElement("li");
    item.textContent = returnedText;
    items.appendChild(item);

    var localButton = document.createElement("button");
    localButton.setAttribute("id", "localButton");
    localButton.textContent = "Delete";
    item.appendChild(localButton);
    localButton.addEventListener("click", DeleteElement);
    input.value = "";
   
    //buton edit
    var localButton = document.createElement("button");
    localButton.setAttribute("id", "localButton");
    localButton.textContent = "Edit";
    item.appendChild(localButton);
    localButton.addEventListener("click",EditItem);
    input.value = "";
//
    //alert(returnedText);
}

function DeleteElement(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
    console.log("deleted");
}


function EditItem(){
    
  var parent=this.parentNode;
  parent.parentNode.returnedText;
    console.log(" "+" ");
        }
   // };


// // Get the input field
// var input = document.getElementById("#inputText");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Cancel the default action, if needed
//   event.preventDefault();
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Trigger the button element with a click
//     document.getElementById("Edit").click();
//   }
// });

}


