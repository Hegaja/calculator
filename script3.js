let dotControl = 0;
let numberA = [];
let numberB = 0;
let numberC = null;
let value = "";
let history = [];

let operationChoose = "";

function pickOperator(operator) {
  value = operator;
  switch (operator) {
    case "sum":
      if (numberC == null) {
        numberC = numberB;
      } else {
        numberC = numberC + numberB;
      }
      document.getElementById("calculatorHeader").innerHTML = numberC + "  +  ";
      history = history + numberC + " + ";
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "sub":
      if (numberC == null) {
        numberC = numberB;
      } else {
        numberC = numberC - numberB;
      }
      document.getElementById("calculatorHeader").innerHTML = numberC + "  -  ";
      history = history + numberC + "  -  ";
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "multi":
      if (numberC == null) {
        numberC = numberB;
      } else {
        if (numberB == null) break;
        numberC = numberC * numberB;
      }
      document.getElementById("calculatorHeader").innerHTML = numberC + "  *  ";
      history = history + numberC + "  *  ";
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "div":
      if (numberC == null) {
        numberC = numberB;
      } else {
        if (numberB == null) break;
        numberC = numberC / numberB;
      }

      document.getElementById("calculatorHeader").innerHTML = numberC + "  /  ";
      history = history + numberC + "  /  ";
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "pw":
      if (numberC == null) {
        numberC = numberB;
      } else {
        numberC = numberC * numberC;
      }
      document.getElementById("calculatorHeader").innerHTML =
        numberC + "  ^2  ";
      history = history + numberC + " ^2 ";
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    case "rt":
      if (numberC == null) {
        numberC = numberB;
      } else if (numberB == null) {
        numberC = Math.sqrt(numberC);
      } else {
        numberC = Math.sqrt(numberB);
      }
      document.getElementById("calculatorHeader").innerHTML =
        " " + String.fromCharCode(8730) + numberC;
      history = history + String.fromCharCode(8730) + numberC;
      document.getElementById("calculatorDisplay").innerHTML = numberC;
      break;
    default:
      return;
  }
  dotControl = 0;

  //numberB = 0; // WARNING
  numberA = [];
  return numberC;
}

function equal() {
  if (value == "") return;
  numberC = pickOperator(value);
  numberB = null;
  document.getElementById("calculatorHeader").innerHTML = history;
  document.getElementById("calculatorDisplay").innerHTML = numberC;
  value = "";
}

function pickValue(val) {
  //Check it the dot was pressed; True = ignore the function; false = dotControl incremented and the code runs
  if (val == "." && dotControl == 1) return;
  if (val == ".") dotControl = 1;
  if (val == "." && numberA == '') {
    numberA.push(0);
    numberB = numberA.join("");
    numberA.push(val);
    numberB = numberA.join("");
    numberB = parseFloat(numberB);
    document.getElementById("calculatorDisplay").innerHTML = numberB;

    return;
  }

  //numberA receive a array of numbers from user and, at the end, converts to a float
  numberA.push(val);
  numberB = numberA.join("");
  numberB = parseFloat(numberB);
  document.getElementById("calculatorDisplay").innerHTML = numberB;
}

function clearAll() {
  dotControl = 0;
  numberB = 0;
  numberA = [];
  numberC = null;
  history = [];

  document.getElementById("calculatorDisplay").innerHTML = numberB;
  document.getElementById("calculatorHeader").innerHTML = "Classic Calculator";
}

function showHistory() {
  history = history + " " + numberC;
  document.getElementById("calculatorHeader").innerHTML = history;
}
