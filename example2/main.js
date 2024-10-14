function calculate(inputValue) {
  let regex = /[+\-*/]/;
  let splitStr = inputValue.split(regex);
  let matchStr = inputValue.match(regex);

  let num1 = +splitStr[0];
  let num2 = +splitStr[1];

  if (matchStr == null || isNaN(num1) || isNaN(num2)) {
    updateResult("Expression not recognized");
    return;
  } else {
    updateResult("");
  }
  let operator = matchStr[0];
  const calculator = new Calculator();
  calculator.add(num1);
  let result;
  switch (operator) {
    case "+":
      result = calculator.add(num2);
      break;
    case "-":
      result = calculator.subtract(num2);
      break;
    case "*":
      result = calculator.multiply(num2);
      break;
    case "/":
      result = calculator.divide(num2);
      break;
  }
  updateResult(result);
}
function updateResult(result) {
  let element = document.getElementById("calculateOutput");
  if (element) {
    element.innerText = result;
  }
}

// function showVersion() {
//   let ele = document.getElementById("version");
//   debugger;
//   if (ele) {
//     let calculator = new Calculator();
//     ele.innerText = calculator.version;

//   }
// }
function showVersion() {
  let ele = document.getElementById("version");
  debugger;
  if (ele) {
    let calculator = new Calculator();
    calculator.version.then(function (version) {
      ele.innerText = version;
    });
  }
}

document.getElementById("calculateBtn") &&
  document
    .getElementById("calculateBtn")
    .addEventListener("click", function () {
      let inputValue = document.getElementById("calculateInput").value;
      calculate(inputValue);
    });
