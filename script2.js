let dotControl = 0;
let numberA = [];
let numberB = null;
let numberC = 0;
let operator = "";
let history = "Classic Calculator";

let operationChoose = "";

function pickOperator(operator) {
  //numberC = numberB;
  //trowing the operator to a global scope
  operationChoose = operator;
  if (history == "Classic Calculator") history = [];
  if (numberB == null) return;
  switch (operator) {
    case "sum":
      history = history + numberB + " + ";
      document.getElementById("calculatorHeader").innerHTML = history;
      numberC = numberC + numberB; //PORQUE ISSO TEM AQUI E NÃO NO RESTO? PQ DIABOS PRESTAAAAA?
      document.getElementById("calculatorDisplay").innerHTML = 0;
      break;
    case "sub":
      history = history + numberB + " - ";
      document.getElementById("calculatorHeader").innerHTML = history;
      numberC = numberC - numberB;
      document.getElementById("calculatorDisplay").innerHTML = 0;
      break;
    case "multi":
      if (numberB != null) {
        numberC = numberB;
      } else {
        numberB = 1;
      }
      history = history + numberC + " * ";

      document.getElementById("calculatorHeader").innerHTML = history;
      numberC = numberC * numberB;
      document.getElementById("calculatorDisplay").innerHTML = 0;
      break;
    case "div":
      if (numberB != null) numberC = numberB;
      history = history + numberB + " / ";
      document.getElementById("calculatorHeader").innerHTML = history;
      document.getElementById("calculatorDisplay").innerHTML = 0;
      break;
    case "rt":
      if (numberB != null) numberC = numberB;
      document.getElementById("calculatorHeader").innerHTML =
        " " + String.fromCharCode(8730) + numberC;
      numberC = Math.sqrt(numberC);

      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "pw":
      if (numberB != null) numberC = numberB;
      document.getElementById("calculatorHeader").innerHTML =
        numberC + " " + String.fromCharCode(178) + " ";
      numberC = numberC * numberC;
      //numberC = numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
  }
  //numberC = numberB;
  // numberB = 0;
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
  numberC;
  //if (isNaN(val) && valnumberC
  //Clear the upper displnumberC
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
      history = numberC; // + " + ";
      break;
    case "sub":
      showHistory();
      numberC = numberC - numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      history = numberC; // + " - ";
      break;
    case "multi":
      showHistory();
      //numberC = numberC * numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      history = numberC; // + " * ";
      break;
    case "div":
      showHistory();
      numberC = numberC / numberB;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      history = numberC; // + " / ";
      break;
    //It was implemented in inputValue function
    // case "pw":
    //   document.getElementById("calculatorDisplay").innerHTML = pw(numberC);
    //   break;
    // case "rt":
    //   document.getElementById("calculatorDisplay").innerHTML = rt(numberC);
    //   break;
  }
  numberB = null; //Testando com valores null para não trollar funções de multi/div
  numberA = [];
  operationChoose = "";
  return;
}

function showHistory() {
  history = history + " " + numberB;
  document.getElementById("calculatorHeader").innerHTML = history;
}
