const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplicateBtn = document.getElementById("multiplicate");
const divideBtn = document.getElementById("divide");
let action, result;

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
multiplicateBtn.onclick = function () {
  action = "*";
};
divideBtn.onclick = function () {
  action = "/";
};

function printResult(sum) {
  if (sum < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = sum;
}
function computeWithAction(val1, val2, actionSymbol) {
  const num1 = Number(val1.value);
  const num2 = Number(val2.value);

  return actionSymbol == "+"
    ? num1 + num2
    : actionSymbol == "-"
    ? num1 - num2
    : actionSymbol == "*"
    ? num1 * num2
    : actionSymbol == "/"
    ? num1 / num2
    : console.log("error");
}
submitBtn.onclick = function () {
  result = computeWithAction(input1, input2, action);
  printResult(result);
};
