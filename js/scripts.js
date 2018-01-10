$(document).ready(function(){
  $("#book-info").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var description = $("input#description").val();
    var date = $("input#date").val();
    var time = $("input#time").val();

    $(".name").text(name);
    $(".description").text(description);
    $(".date").text(date);
    $(".time").text(time);
    $("#booking-confirmed").toggle();
  });
});
