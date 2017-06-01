$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input= $("input#person1").val();

    $(".person1").text(person1Input);

    $(".jumbotron").show();
    $("#letter").show();

    event.preventDefault();
  });
});
