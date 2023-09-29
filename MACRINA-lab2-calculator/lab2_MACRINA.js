let result = '';  // Initialize result variable

function addToResult(value) {
    result += value; // Append the value to the result
    document.getElementById('result').value = result; // Update the input field
}

function calculateResult() {
    try {
        result = eval(result); // Calculate result and update the variable
        document.getElementById('result').value = result; // Update the input field
    } catch (error) {
        alert('Invalid Input!');
    }
}

function clearResult() {
    result = ''; // Clear the result
    document.getElementById('result').value = ''; // Update the input field
}