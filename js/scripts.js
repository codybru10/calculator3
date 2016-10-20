
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

  $("form#calculator").submit(function(event){
    debugger;
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
    event.preventDefault();
  });


});
