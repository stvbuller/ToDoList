$(document).ready(function(){
  
$(".alert-danger").hide();

$(".btn-default").on("click", function(preventSubmit){
  preventSubmit.preventDefault();

  $(".alert-danger").hide();

  var newText = $("#newInput").val().trim();
  console.log(newText);

  var isDup = false;
    $("td.checkForDup").each(function() {
      if($(this).text().trim() === newText) {
        isDup = true;
        return;
      }
    });

    if(isDup) {
      $(".alert-danger").show();
      $("#newInput").val("").focus(); 
      return;
    }
  


  var newTableRow = $("<tr>");
  var newTableData = $("<td>").addClass("checkForDup").append(newText);
  var buttonDelete = $("<button>").addClass("btn btn-danger").append("Remove");
  var deleteTableData = $("<td>").append(buttonDelete);

  var markedOFF = ('<input type="checkbox" name="checkbox1" />');
  var markedItem = $("<td>").append(markedOFF).addClass(".checkbox");


  newTableRow.append(newTableData);
  newTableRow.append(buttonDelete);
  newTableRow.append(markedItem);

  $("tbody").append(newTableRow);
  $("#newInput").val("").focus();

  $("table").css("border", "2px solid lightblue");

  });


  $("table").on("click", ".btn-danger", function() {
    $(this).parent().remove();
  });


  $("form").on("click", ".alert-danger", function() {
    $(".alert-danger").hide();
    $("#newInput").val("").focus();
  });


  $("table").on("click", 'input[type="checkbox"]', function() {
    if($(this).prop("checked") == true){
                $(this).parent().parent().css("text-decoration", "line-through")
            }
            else if($(this).prop("checked") == false){
                $(this).parent().parent().css("text-decoration", "none")
            }
  });
  
});
