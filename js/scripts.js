
  // Addition

  var add = function(n1, n2) {
    return n1 + n2;
  };

  // Subtraction

  var subtract = function(n1, n2) {
    return n1 + n2;
  };

  // Multiplication

  var multiply = function(n1, n2) {
    return n1 * n2;
  };

  // Division

  var divide = function(n1, n2){
    return n1 / n2;
  };

$(document).ready(function(){

  $("form#add").submit(function(event){
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());

    var result = (add(number1, number2));
    $("#output").text(result);
    event.preventDefault();
  });


});
