$(document).ready(function(){

$(".btn-default").on("click", function(preventSubmit){
  preventSubmit.preventDefault();
  alert("The button works");


var newItem = $("#newItemText").val();
console.log(newItem);



});


/*
var newTableRow = $("<tr>");
var newTableData = $("<td>");
var buttonDelete = $("button").addClass("btn btn-danger").append("Remove");
var deleteTableData = $("<td>").append(buttonDelete);
var checkBox = $("<checkbox>");
var checkedTabelData = $(<td>).append(checkBox);

*/



});
