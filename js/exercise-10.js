function createPower(exponent) {
    return function(number) {
        return Math.pow(number, exponent);
    };
}

const square = createPower(2);

function displaySquare() {
    // 1. Get the value from the input box
    const input = document.getElementById("numInput").value;
    const resultDiv = document.getElementById("result");

    // 2. Check if input is valid
    if (input === "") {
        resultDiv.textContent = "Please enter a number.";
        return;
    }

    // 3. Use the closure function to calculate
    const answer = square(input);

    // 4. Display result matching the screenshot format
    resultDiv.textContent = `Square of ${input} is ${answer}`;
}
