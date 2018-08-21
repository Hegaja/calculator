let dotControl = 0;
let numberA = [];
let numberB = 0;
let numberC = 0;
let operator = "";
let history = "Classic Calculator";

let operationChoose = "";

function pickOperator(operator) {
  //numberC = numberB;
  //trowing the operator to a global scope
  operationChoose = operator;
  if (history == "Classic Calculator") history = [];
  switch (operator) {
    case "sum":
      history = history + numberB + " + ";
      document.getElementById("calculatorHeader").innerHTML = history;
      numberC = numberC +numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "sub":
      history = history + numberB + " - ";
      document.getElementById("calculatorHeader").innerHTML = history;
      document.getElementById("calculatorDisplay").innerHTML = 0;
      break;
    case "multi":
      history = history + numberB + " * ";
      document.getElementById("calculatorHeader").innerHTML = history;
      document.getElementById("calculatorDisplay").innerHTML = 0;
      break;
    case "div":
      history = history + numberB + " / ";
      document.getElementById("calculatorHeader").innerHTML = history;
      document.getElementById("calculatorDisplay").innerHTML = 0;
      break;
    case "rt":
      document.getElementById("calculatorHeader").innerHTML =
        " " + String.fromCharCode(8730) + numberB;
      numberB = Math.sqrt(numberB);
      numberC = numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberB;
      break;
    case "pw":
      document.getElementById("calculatorHeader").innerHTML =
        numberB + " " + String.fromCharCode(178) + " ";
      numberB = numberB * numberB;
      numberC = numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberB;
      break;
  }
  //numberC = numberB;
  //numberB = 0;
  numberA = [];
  // Code to show pw/rt without the equal button
  //   if (val == "pw") {
  //     numberB = pw(numberC);
  //     document.getElementById("calculatorDisplay").innerHTML = numberB;
  //     return;
  //   }
  //   if (val == "rt") {
  //     numberB = rt(numberC);
  //     document.getElementById("calculatorDisplay").innerHTML = numberB;
  //     return;
  //   }
}

function pickValue(val) {
  //if (isNaN(val) && val != ".") {
  //Clear the upper display to create a small history of operations
  // if (history == "Classic Calculator") history = [];

  // history = history + " " + numberB + operatorDisplay;
  // document.getElementById("calculatorHeader").innerHTML = history;
  // operator = val;
  // numberC = numberB;
  // dotControl = 0;

  // //numberB = 0;
  // numberA = [];

  // operationChoose = val;
  // document.getElementById("calculatorDisplay").innerHTML = numberB;
  // return;
  //}

  //Check it the dot was pressed; True = ignore the function; false = dotControl incremented and the code runs
  if (val == "." && dotControl == 1) return;
  if (val == ".") dotControl = 1;

  //numberA receive a array of number from user, at the end converts to a float
  numberA.push(val);
  numberB = numberA.join("");
  numberB = parseFloat(numberB);
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
  history = [];

  document.getElementById("calculatorDisplay").innerHTML = numberB;
  document.getElementById("calculatorHeader").innerHTML = "Classic Calculator";
}

function operate() {
  //let result = (numberC, numberB) => operationChoose();

  // document.getElementById("calculatorDisplay").innerHTML = result;
  // document.getElementById("calculatorHeader").innerHTML = "Classic Calculator";
  switch (operationChoose) {
    case "sum":
      showHistory();
      numberC = numberC + numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      history =  numberC;// + " + ";
      break;
    case "sub":
      showHistory();
      numberC = numberC - numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      history =  numberC + " - ";
      break;
    case "multi":
      showHistory();
      numberC = numberC * numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      history =  numberC + " * ";
      break;
    case "div":
      showHistory();
      numberC = numberC / numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      history =  numberC + " / ";
      break;
    //It was implemented in inputValue function
    // case "pw":
    //   document.getElementById("calculatorDisplay").innerHTML = pw(numberC);
    //   break;
    // case "rt":
    //   document.getElementById("calculatorDisplay").innerHTML = rt(numberC);
    //   break;
  }
  numberA = [];
  return;
}

function showHistory() {
  history = history + " " + numberB;
  document.getElementById("calculatorHeader").innerHTML = history;
}
