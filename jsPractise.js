function oneButton() {
    document.getElementById("screen").innerHTML += "1";
}

function twoButton() {
    document.getElementById("screen").innerHTML += "2";
}

function threeButton() {
    document.getElementById("screen").innerHTML += "3";
}

function fourButton() {
    document.getElementById("screen").innerHTML += "4";
}

function fiveButton() {
    document.getElementById("screen").innerHTML += "5";
}

function sixButton() {
    document.getElementById("screen").innerHTML += "6";
}

function sevenButton() {
    document.getElementById("screen").innerHTML += "7";
}

function eightButton() {
    document.getElementById("screen").innerHTML += "8";
}

function nineButton() {
    document.getElementById("screen").innerHTML += "9";
}

function clearButton () {
    document.getElementById("screen").innerHTML = "";
}

function addButton() {
    num1 = Number(document.getElementById("screen").innerHTML);
    operator = "+";
    document.getElementById("screen").innerHTML = "";
}

function minusButton() {
    num1 = Number(document.getElementById("screen").innerHTML);
    operator = "-";
    document.getElementById("screen").innerHTML = "";
}

function multiplyButton() {
    num1 = Number(document.getElementById("screen").innerHTML);
    operator = "*";
    document.getElementById("screen").innerHTML = "";
}

function divideButton() {
    num1 = Number(document.getElementById("screen").innerHTML);
    operator = "/";
    document.getElementById("screen").innerHTML = "";
}

function equalButton() {
    num2 = Number(document.getElementById("screen").innerHTML);
    switch(operator)
    {
        case "+":
        result = num1 + num2;
        document.getElementById("screen").innerHTML = result;
        break;

        case "-":
        result = num1 - num2;
        document.getElementById("screen").innerHTML = result;
        break;

        case "*":
        result = num1 * num2;
        document.getElementById("screen").innerHTML = result;
        break;

        case "/":
        result = num1 / num2;
        document.getElementById("screen").innerHTML = result;
        break;
    }
}

num1 = 0;
num2 = 0;
operator = "";
result = 0;