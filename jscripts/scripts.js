var deleteButton = document.getElementsByClassName("btn btn-danger")
var checkButton = document.getElementsByClassName("checkbox")



//adds click to delete buttons
for(var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", deleteItem);
}

//adds click to check boxes
for(var i = 0; i < checkButton.length; i++) {
  checkButton[i].addEventListener("click", checkedOff);
}




function checkedOff () {
  alert("This was checked off");
  //when the checkbox is checked the innerHTML
  //is struckthrough if the innerHTML is
  //already struck through undo the strikethrough
  this.parentNode.innerHTML = "Item changed!";
}

//deletes the list item
function deleteItem () {
  this.parentNode.remove()
}

//function addItem () {
  //create a var of the unordered list and append to it?
  //this.parentNode.parentNode  insert or add
//}

