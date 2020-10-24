let total = 0;
let result = document.querySelector(".output");
let output = "0";
let operator;

/** Takes in the text value of a button. 
 * Calls useSymbol if value is not a number.
 * Otherwise, put the value into output string.
 */
function useButton(value) {
    if (isNaN(parseInt(value))) {
        useSymbol(value);
    } else {
        if (output == "0") {
            output = value;
        } else {
            output += value;
        }
    }
    result.innerText = output;
}

/** Handles the value if it is a symbol.
 * If it is an operator or '=', perform the operation.
 */
function useSymbol(value) {
    if (value === "C"){
        output = "0";
        total = 0;

    } else if (value === "←") {
        if (output.length != 1) {
            output = output.substring(0, output.length - 1)
        } else {
            output = "0";
        }

    } else if (value === "=") {
        if (operator != null) {
            performOperation(parseInt(output));
            output = total;
            total = 0;
            operator = null;
        }

    } else { //operator
        doMath(value);
    }
}

/** Handles operators. */
function doMath(value) {
    operator = value;
    if (output != "0") {
        const intOutput = parseInt(output);
        if (total == 0) {
            total = intOutput;


        } else {
            performOperation(intOutput);
            
        }
        output = "0";
    }
}

/** Does the actual math (performs the operation stored in operator). */
function performOperation(intOutput) {
    switch (operator) {
        case "+":
            total += intOutput;
            break;
        case "-":
            total -= intOutput;
            break;
        case "÷":
            total /= intOutput;
            break;
        case "×":
            total *= intOutput;
            break;    
    }
}

/** Initializes the action of clicking button. */
function action() {
    document.querySelector(".calculator-buttons").addEventListener("click", event => {
        useButton(event.target.innerText);
    });
}

action();