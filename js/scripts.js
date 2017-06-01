$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input= $("input#person1").val();
    var address1Input= $("input#address1").val();
    var address2Input= $("input#address2").val();
    var cityInput= $("input#city").val();
    var zipInput= $("input#zip").val();

    $(".person1").text(person1Input.toUpperCase());
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".city").text(cityInput);
    $(".zip").text(zipInput);

    $(".jumbotron").show();
    $("#letter").show();

    event.preventDefault();
  });
});
