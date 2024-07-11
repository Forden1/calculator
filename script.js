const buttons = document.querySelectorAll('button');

function updateDisplay(displayValue) {
    const display = document.getElementById('screen');
    display.innerText = displayValue.length > 9 ? displayValue.substring(0, 9) : displayValue;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.value);
        calc(button);
    });
});

let numbuffer = "";
let numbuffer2 = "";
let oppbuffer = "";

function calc(button) {
    const value = button.value;
    if (button.classList.contains('number')) {
        if (oppbuffer === "") {
            numbuffer += value;
            updateDisplay(numbuffer);
        } else if (numbuffer !== "" && oppbuffer !== "") {
            numbuffer2 += value;
            updateDisplay(numbuffer2);
        }
    } else if (button.classList.contains('opp')) {
        if (numbuffer !== "" && numbuffer2 !== "") {
            res(numbuffer, numbuffer2, oppbuffer);
            numbuffer2 = ""; 
        }
        oppbuffer = value; // Update the operator buffer
    } else if (button.id === "equal") {
        if (numbuffer !== "" && numbuffer2 !== "" && oppbuffer !== "") {
            res(numbuffer, numbuffer2, oppbuffer);
            numbuffer2 = ""; 
            oppbuffer = ""; 
        }
    } else if (button.id === "clear") {
        numbuffer = "";
        numbuffer2 = "";
        oppbuffer = "";
        updateDisplay("0");
    }
}

function res(n1, n2, opp) {
    let fv;
    switch (opp) {
        case "+":
            fv = parseInt(n1) + parseInt(n2);
            break;
        case "-":
            fv = parseInt(n1) - parseInt(n2);
            break;
        case "*":
            fv = parseInt(n1) * parseInt(n2);
            break;
        case "/":
            fv = parseInt(n1) / parseInt(n2);
            break;
        default:
            fv = 0;
    }
    numbuffer = fv.toString();
    updateDisplay(numbuffer);
}
