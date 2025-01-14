
const buttons = document.getElementsByClassName("number");
const input = document.getElementsByClassName("input")[0];
const operation = document.getElementsByClassName("operation");
const answer = document.getElementsByClassName("ans-button")[0];
const clear = document.getElementsByClassName("clear")[0];
const deletAt = document.getElementsByClassName("delete")[0];
const sign = document.getElementsByClassName("sign")[0];
const decimal = document.getElementsByClassName("decimal")[0];
const percentage = document.getElementsByClassName("percentage")[0];

let number = "";
let exp = "";
let operend = "";

for (let i = 0; i < buttons.length; i++) {
    let val = buttons[i].innerHTML;
    buttons[i].addEventListener("click", print);
    function print() {
        exp += val;
        number += val;
        input.innerHTML = number;
    }
}

for (let i = 0; i < operation.length; i++) {
    let val = operation[i].innerHTML;
    operation[i].addEventListener("click", add);
    function add() {
        exp += val;
        input.innerHTML = val;
        number = "";
    }
}

decimal.addEventListener("click", decimalcheck);
function decimalcheck() {
    if (number.indexOf(".") === -1) {
        exp += ".";
        number += ".";
        input.innerHTML = number;
    }
}

let flag;
sign.addEventListener("click", changsign);
function changsign() {
    const change = Number(number) * -1;
    number = change;
    input.innerHTML = number;
}

percentage.addEventListener("click", percentageCal);
function percentageCal() {
    const percentagenumber = (Number(number) / 100);
    exp = percentagenumber;
    number = percentagenumber;
    input.innerHTML = number;
}

clear.addEventListener("click", clearAll);
function clearAll() {
    input.innerHTML = "0";
    exp = "";
    number = "";
}

deletAt.addEventListener("click", deletele);
let ch;
function deletele() {
    if (input.innerHTML === "0") {
        return;
    }
    else if (exp.length === 1) {
        input.innerHTML = "0";
        number = "";
        exp = "0";
        operend = "";
        return;
    }
    else {
        ch = exp.slice(0, -1);
        exp = ch;
        operend = ch;
        number = operend;
        input.innerHTML = operend;
    }

}

answer.addEventListener("click", ans);
function ans() {
    let count = 0;
    let out = 0;
    operend = "";
    let operation = "";
    for (let i = 0; i < exp.length; i++) {
        count++;
        if ((Number(exp[i]) >= 0 && Number(exp[i]) <= 9) || exp[i] === ".") {
            operend += exp[i];
        }
        else {
            out = Number(operend);
            operation = exp[i];
            operend = "";
            break;
        }
    }

    for (let i = count; i < exp.length; i++) {
        if (exp[i] === "+" || exp[i] === "-" || exp[i] === "X" || exp[i] === "/" || exp[i] === "%") {
            if (operation === '+') {
                out += Number(operend);
                operation = exp[i];
                operend = "";
            }
            else if (operation === '-') {
                out = out - Number(operend);
                operation = exp[i];
                operend = "";
            }
            else if (operation === 'X') {
                out *= Number(operend);
                operation = exp[i];
                operend = "";
            }
            else if (operation === '%') {
                out = out % Number(operend);
                operation = exp[i];
                operend = "";
            }
            else if (operation === '/') {
                out = out / Number(operend);
                operation = exp[i];
                operend = "";
            }
        }
        else if (i === exp.length - 1) {
            operend += exp[i];
            if (operation === "+") {
                out += Number(operend);
            }
            else if (operation === '-') {
                out = out - Number(operend);
            }
            else if (operation === 'X') {
                out = out * Number(operend);
            }
            else if (operation === '/') {
                out = out / Number(operend);
            }
            else if (operation === '%') {
                out = out % Number(operend);
            }
        }
        else {
            operend += exp[i];
        }
    }
    input.innerHTML = out.toFixed(2);
}