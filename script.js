const container = document.querySelector(".container");
const display = document.querySelector(".display");

const clearDisplay = document.querySelector("#clear");
const deleteNumber = document.querySelector("#delete");
const calculateResult = document.querySelector("#calculate");

let operator = "";
let a = "",
  b = "";
let resultFlag = false;

container.addEventListener("click", (event) => {
  if (event.target.matches(".number")) {
    const digit = event.target.textContent;
    if (operator) {
      b = addDigit(b, digit);
      updateDisplay();
    } else if (!resultFlag) {
      a = addDigit(a, digit);
      updateDisplay();
    } else {
      a = addDigit("",digit);
      updateDisplay();
      resultFlag = false;
    }
  }
  if (event.target.matches(".operator")) {
    if (a) {
      if (operator && b) {
        const worked = calculate();
        if (!worked) return;
      }

      operator = event.target.textContent;
      updateDisplay();
    }
  }
});

clearDisplay.addEventListener("click", (event) => {
  a = "";
  b = "";
  operator = "";
  resultFlag = false;
  updateDisplay();
});

deleteNumber.addEventListener("click", (event) => {
  resultFlag = false;
  if (b) {
    b = b.slice(0, -1);
  } else if (operator) {
    operator = "";
  } else {
    a = a.slice(0, -1);
  }
  updateDisplay();
});

calculateResult.addEventListener("click", (event) => {
  calculate();
});

function calculate() {
  if (!(operator && a && b)) return false;

  const answer = operate(operator, +a, +b);
  if (answer === "Error") {
    a = "";
    b = "";
    operator = "";
    resultFlag = false;
    setDisplay("Error");
    return false;
  }
  a = Number(answer.toFixed(8));
  a = String(a);
  b = "";
  operator = "";
  resultFlag = true;
  updateDisplay();
  return true;
}

function addDigit(current, digit) {
  if (digit === ".") {
    if (current === "") return "0.";
    if (current.includes(".")) return current;
    return current + ".";
  }
  if (current === "0") return digit;
  return current + digit;
}

function updateDisplay() {
  const string = `${a}${operator}${b}`;
  setDisplay(string);
}

function setDisplay(text = "") {
  display.textContent = text;
}

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
  return b === 0 ? "Error" : a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
  }
}
