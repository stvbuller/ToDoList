var deleteButton = document.getElementsByClassName("btn btn-danger")
var checkButton = document.getElementsByClassName("itemcheckbox")
var addButton = document.getElementsByClassName("btn btn-default")


//adds click to delete buttons
for(var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", deleteItem);
}

//adds click to check boxes
for(var i = 0; i < checkButton.length; i++) {
  checkButton[i].addEventListener("click", checkedOff);
}

//adds click to submit button
for(var i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", addToList);
}


function checkedOff () {
  //when the checkbox is checked the innerHTML
  //is struckthrough if the innerHTML is
  //already struck through, undo the strikethrough
  //text-decoration: line-through;
  //text-decoration: none|underline|overline|line-through|initial|inherit;
  this.parentNode.innerHTML = "Item changed!"; 
}

//deletes the list item
function deleteItem () {
  this.parentNode.remove();
}

function addToList () {
  alert("You added to the list");
  //create a var of the unordered list and append to it?
  //this.parentNode.parentNode  insert or add
}

