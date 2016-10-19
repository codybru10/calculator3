
  // Addition

  var add = function(n1, n2) {
    return n1 + n2;
  };

  // Subtraction

  var subtract = function(n1, n2) {
    return n1 - n2;
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

    var result = add(number1, number2);
    $("#output-add").text(result);
    event.preventDefault();
  });

  $("form#subtract").submit(function(event) {
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());

    var result = subtract(number1, number2);
    $("#output-subtract").text(result);
    event.preventDefault();
  });

  $("form#multiply").submit(function(event) {
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());

    var result = multiply(number1, number2);
    $("#output-multiply").text(result);

    event.preventDefault();
  });

  $("form#divide").submit(function(event) {
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());

    var result = divide(number1, number2);
    $("#output-divide").text(result);

    event.preventDefault();
  });



});
