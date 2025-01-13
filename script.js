const buttons = document.getElementsByClassName("number");
const input = document.getElementsByClassName("input")[0];
const addition = document.getElementsByClassName("addition")[0];
const subtraction = document.getElementsByClassName("subtraction")[0];
const answer = document.getElementsByClassName("ans-button")[0];
let number = "";
let exp = "";
let output;

for (let i = 0; i < buttons.length; i++) {
    let val = buttons[i].innerHTML;
    buttons[i].addEventListener("click", print);
    function print() {
        exp += val
        number += val;
        input.innerHTML = number;
    }
}

addition.addEventListener("click", add);
function add() {
    exp += addition.innerHTML;
    input.innerHTML = addition.innerHTML;
    number = "";
}

answer.addEventListener("click", ans);
function ans() {
    alert("ji");
    console.log(exp);
    let ope1 = "";
    let ope2 = "";
    let operation = "";
    let o1 = 0;
    for (let i = 0; i < ans.length; i++) {
        if (ans[i] === "+" || ans[i] === '-' || ans[i] === 'X' || ans[i] === '/') {
            alert("ji");
            if (operation === '+') {
                o1 += Number(ope1);
                ope1 = "";
            }
            operation = ans[i];
            o1 = Number(ope1);
        }
        else {
            ope1 += ans[i];
            console.log(ope1);
        }
    }
    console.log(o1);
}



