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
        operatorDisplay = " ^2 ";
        break;
    }
    history = history + " " + numberB + operatorDisplay;
    document.getElementById("calculatorHeader").innerHTML = history;
    operator = val;
    numberC = numberB;
    dotControl = 0;

    //numberB = 0;
    numberA = [];

    if (val == "pw") {
      numberB = pw(numberC);
      document.getElementById("calculatorDisplay").innerHTML = numberB;
      return;
    }
    if (val == "rt") {
      numberB = rt(numberC);
      document.getElementById("calculatorDisplay").innerHTML = numberB;
      return;
    }

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
  document.getElementById("calculatorHeader").innerHTML = "Classic Calculator";
  switch (operationChoose) {
    case "sum":
      //showHistory();
      numberC = sum(numberC, numberB);
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "sub":
      showHistory();
      numberB = sub(numberC, numberB);
      document.getElementById("calculatorDisplay").innerHTML = numberB;
      break;
    case "multi":
      showHistory();
      numberB = multi(numberC, numberB);
      document.getElementById("calculatorDisplay").innerHTML = numberB;
      break;
    case "div":
      showHistory();
      numberB = div(numberC, numberB);
      document.getElementById("calculatorDisplay").innerHTML = numberB;
      break;
    //It was implemented in inputValue function
    // case "pw":
    //   document.getElementById("calculatorDisplay").innerHTML = pw(numberC);
    //   break;
    // case "rt":
    //   document.getElementById("calculatorDisplay").innerHTML = rt(numberC);
    //   break;
  }
  return;
}

function showHistory() {
  history = history + " " + numberB;
  document.getElementById("calculatorHeader").innerHTML = history;
}
