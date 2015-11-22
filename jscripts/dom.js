$(document).ready(function(){
  
$(".alert-danger").hide();

$(".btn-default").on("click", function(preventSubmit){
  preventSubmit.preventDefault();

  var newText = $("#newInput").val().trim();
  console.log(newText);


/*
  var isDup = false;


  $("td.word-td").each(function () {    //check for duplicates
    if ($(this).text().trim() === newText) {
      isDup = true;
      return;
    }
  });
  
  if (isDup = true){
    $(".alert-danger").show();
    return;
  }
  */

  var newTableRow = $("<tr>");
  var newTableData = $("<td>").addClass("word-td").append(newText);
  var buttonDelete = $("<button>").addClass("btn btn-danger").append("Remove");
  var deleteTableData = $("<td>").append(buttonDelete);

  var markedOFF = ('<input type="checkbox" name="checkbox1" id="checkedbox"/>');
  var markedItem = $("<td>").append(markedOFF).addClass(".checkbox");


  newTableRow.append(newTableData);
  newTableRow.append(buttonDelete);
  newTableRow.append(markedItem);

  $("tbody").append(newTableRow);
  $("#newInput").val("").focus;

  });

  $("table").on("click", ".btn-danger", function() {
    $(this).parent().remove();

  });




});
