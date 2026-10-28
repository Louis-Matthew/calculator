function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b === 0 ? "Division by zero not possible" : a / b;
}


let number1, number2;
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}

