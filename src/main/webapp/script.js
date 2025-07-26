const display = document.getElementById("calculator-display");
const keys = document.querySelectorAll(".Calculator-Key");

// Event listener for all keys
keys.forEach(key => {
    key.addEventListener("click", () => {
        const value = key.innerText;
        handleInput(value);
    });
});

// Handle key inputs
function handleInput(value) {
    if (value === "C") {
        display.innerText = "";
    } else if (value === "Del") {
        display.innerText = display.innerText.slice(0, -1);
    } else if (value === "=") {
        const expression = display.innerText;
        if (expression.trim() !== "") {
            console.log("Sending to server:", expression);
            sendToServer(expression);
        }
    } else {
        display.innerText += value;
    }
}

// Send expression to servlet
function sendToServer(expression) {
    fetch("CalculatorServlet", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "expression=" + encodeURIComponent(expression)
    })
        .then(response => {
            console.log("Response status: ", response.status);
            return response.text();
        })
        .then(result => {
            console.log("Response from server:", result);
            display.innerText = result;
        })
        .catch(error => {
            console.error("Error: ", error);
            display.innerText = "Error!";
        });
}
