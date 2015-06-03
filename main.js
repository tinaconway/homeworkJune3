$(document).ready(function() {

  function add(num1, num2) {
    return Number(num1) + Number(num2);
  }

  function subtract(num1, num2) {
    return Number(num1) - Number(num2);
  }

  function multiply(num1, num2) {
    return Number(num1) * Number(num2);
  }

  function divide(num1, num2) {
    return Number(num1) / Number(num2);
  }


  $('.add').click(function(event) {
  event.preventDefault();
  var amount1 = $('input[name="num1"]').val();
  var amount2 = $('input[name="num2"]').val();
  var finalCalc = add(amount1, amount2);
  $('#answer').text(finalCalc);
});

  $('.subtract').click(function(event) {
  event.preventDefault();
  var amount1 = $('input[name="num1"]').val();
  var amount2 = $('input[name="num2"]').val();
  var finalCalc = subtract(amount1, amount2);
  $('#answer').text(finalCalc);
  });

  $('.multiply').click(function(event) {
  event.preventDefault();
  var amount1 = $('input[name="num1"]').val();
  var amount2 = $('input[name="num2"]').val();
  var finalCalc = multiply(amount1, amount2);
  $('#answer').text(finalCalc);
  });

  $('.divide').click(function(event) {
  event.preventDefault();
  var amount1 = $('input[name="num1"]').val();
  var amount2 = $('input[name="num2"]').val();
  var finalCalc = divide(amount1, amount2);
  $('#answer').text(finalCalc);
});


//Calculator
  // $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').click(function(event) {
  //     var v = $(this).val();
  //     $('#display').val($('#display').val() + v);
  //
  // });

  var number = "";
  var newNumber = "";
  var operator = "";
  var totalDiv = $('#display');
  totalDiv.text("0");
  var result;

  $('.numButton').not('#clear').click(function() {
      number += $(this).text();
      totalDiv.text(number)
  });

  $('.operator').click(function() {
      operator = $(this).text();
      newNumber = number;
      number = "";
      totalDiv.text("");
  });

  $('#clear').click(function() {
      number = "";
      totalDiv.text("0");
  });

  $('#equals').click(function() {
      if (operator === "+") {
        result = (parseInt(number, 10) + parseInt(newNumber, 10)).toString(10);
      }
      else if (operator === "-") {
        result = (parseInt(newNumber, 10) - parseInt(number, 10)).toString(10);
      }
      else if (operator === "X") {
        result = (parseInt(newNumber, 10) * parseInt(number, 10)).toString(10);
      }
      else if (operator === "/") {
        result = (parseInt(newNumber, 10) / parseInt(number, 10)).toString(10);
      }

      totalDiv.text(result);
      number = "";
      newNumber = "";

  });


});
