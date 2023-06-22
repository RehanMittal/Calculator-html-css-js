let currentValue = "";
let currentOperator = "";
let firstOperand = "";

function appendValue(value) {
  currentValue += value;
  document.getElementById("result").value = currentValue;
}

function setOperator(operator) {
  currentOperator = operator;
  firstOperand = currentValue;
  currentValue = "";
}

function deleteValue(){
    currentValue = currentValue.slice(0, -1);
    document.getElementById("result").value = currentValue;
}

function clearResult() {
  currentValue = "";
  currentOperator = "";
  firstOperand = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let result;
  switch (currentOperator) {
    case "+":
      result = Number(firstOperand) + Number(currentValue);
      break;
    case "-":
      result = Number(firstOperand) - Number(currentValue);
      break;
    case "*":
      result = Number(firstOperand) * Number(currentValue);
      break;
    case "/":
      result = Number(firstOperand) / Number(currentValue);
      break;
    case "%":
        result = Number(firstOperand) % Number(currentValue);
        break;
  }
  currentValue = result.toString();
  document.getElementById("result").value = currentValue;
  currentOperator = "";
}
