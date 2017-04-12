function add() {

  var result = parseInt(document.getElementById('num1').value) + parseInt(document.getElementById('num2').value);
  append(result);
  return result;
}
function subtract() {

  var result = parseInt(document.getElementById('num1').value) - parseInt(document.getElementById('num2').value);
  append(result);
  return result;
}
function multiply() {

  var result = parseInt(document.getElementById('num1').value) * parseInt(document.getElementById('num2').value);
  append(result);
  return result;
}
function divide() {

  var result = parseInt(document.getElementById('num1').value) / parseInt(document.getElementById('num2').value);
  append(result);
  return result;
}



function append(answer) {
  var result = document.getElementById("result");
  result.innerHTML = answer;
}
