$(document).ready(function(){

$(".btn-default").on("click", function(preventSubmit){
  preventSubmit.preventDefault();


    var newText = $("#newInput").val();
    console.log(newText);


    var newTableRow = $("<tr>");
    var newTableData = $("<td>").append(newText);
    var buttonDelete = $("<button>").addClass("btn btn-danger").append("Remove");
    var deleteTableData = $("<td>").append(buttonDelete);

    var markedOFF = $("<checkbox>").append("Done");
    var markedItem = $("<td>").append(markedOFF);


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
