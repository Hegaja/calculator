let dotControl = 0;
let numberA = [];
let numberB = 0;
let numberC = 0;
let operator = "";
let history = "Classic Calculator";
let operatorDisplay = "";
let operationChoose = "";

function sum(numA, numB) {
  return numA + numB;
}

function sub(numA, numB) {
  return numA - numB;
}
function multi(numA, numB) {
  return numA * numB;
}

function div(numA, numB) {
  return numA / numB;
}

function pw(numA) {
  return numA * numA;
}

function rt(numA) {
  return Math.sqrt(numA);
}

function pickValue(val) {
  if (isNaN(val) && val != ".") {
    if (history == "Classic Calculator") history = [];

    switch (val) {
      case "sum":
        operatorDisplay = " + ";
        break;
      case "sub":
        operatorDisplay = " - ";
        break;
      case "multi":
        operatorDisplay = " * ";
        break;
      case "div":
        operatorDisplay = " / ";
        break;
      case "rt":
        operatorDisplay = " " + String.fromCodePoint(174) + " ";
        break;
      case "pw":
        operatorDisplay = " ^ ";
        break;
    }
    history = history + " " + numberB + operatorDisplay;
    document.getElementById("calculatorHeader").innerHTML = history;
    operator = val;
    numberC = numberB;
    dotControl = 0;

    numberB = 0;
    numberA = [];

    operationChoose = val;
    document.getElementById("calculatorDisplay").innerHTML = numberB;
    return;
  }
  if (val == "." && dotControl == 1) return;
  if (val == ".") dotControl = 1;

  numberA.push(val);
  numberB = numberA.join("");
  numberB = parseFloat(numberB);
  //   console.log(numberB);
  document.getElementById("calculatorDisplay").innerHTML = numberB;
}

// function secondValue() {
//   numberB = numberA.join("");
//   numberB = parseFloat(numberB);
// }

// function testGlobal() {
//   numberB = numberA.join("");
//   numberB = parseFloat(numberB);
//   console.log(numberB);
//   document.getElementById("calculatorDisplay").innerHTML = numberB;
// }

function clearAll() {
  dotControl = 0;
  numberB = 0;
  numberA = [];
  numberC = 0;

  history = "Classic Calculator";
  document.getElementById("calculatorDisplay").innerHTML = numberB;
  document.getElementById("calculatorHeader").innerHTML = history;
}

function operate() {
  //let result = (numberC, numberB) => operationChoose();

  // document.getElementById("calculatorDisplay").innerHTML = result;

  switch (operationChoose) {
    case "sum":
      showHistory();
      document.getElementById("calculatorDisplay").innerHTML = sum(
        numberC,
        numberB
      );
      break;
    case "sub":
      showHistory();
      document.getElementById("calculatorDisplay").innerHTML = sub(
        numberC,
        numberB
      );
      break;
    case "multi":
      showHistory();
      document.getElementById("calculatorDisplay").innerHTML = multi(
        numberC,
        numberB
      );
      break;
    case "div":
      showHistory();
      document.getElementById("calculatorDisplay").innerHTML = div(
        numberC,
        numberB
      );
      break;
    case "pw":
      document.getElementById("calculatorDisplay").innerHTML = pw(numberC);
      break;
    case "rt":
      document.getElementById("calculatorDisplay").innerHTML = rt(numberC);
      break;
  }
  return;
}

function showHistory() {
  history = history + " " + numberB;
  document.getElementById("calculatorHeader").innerHTML = history;
}
