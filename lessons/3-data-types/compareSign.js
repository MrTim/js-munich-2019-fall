let x = Number(prompt('First number?'));
let y = Number(prompt('Second number?'));

function compareSign(firstNumber, secondNumber) {
    if (x >= 0 && y >= 0) {
        return true; // Both are positive
    }
    if (x < 0 && y < 0) {
        return true; // Both are negative
    }
    return false; // Any other case
}

if (compareSign(x, y)) {
    document.writeln("Same sign");
} else {
    document.writeln("Different sign");
}