$(document).ready(function(){
  
$(".alert-danger").hide();

$(".btn-default").on("click", function(preventSubmit){
  preventSubmit.preventDefault();


  var newText = $("#newInput").val().trim();
  console.log(newText);
  var isDup = false;

  /*
  $("td.word-td").each(function () {
    if ($(this).text() === newText) {
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
  var newTableData = $("<td>").append(newText);
  var buttonDelete = $("<button>").addClass("btn btn-danger").addClass("word-td").append("Remove");
  var deleteTableData = $("<td>").append(buttonDelete);

  var markedOFF = $("<button>").addClass("btn btn-primary").append("Done");
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


  $("table").on("click", ".btn-primary", function() {
    alert("This is done");
  });

/*  
  //if the checkbox is clicked (.checkbox) the text should
  //be struckthrough
*/


});
