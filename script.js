// Make variable to handle the input
const input = document.getElementById('numbersInput');
// Make variable to handle the output
const output = document.getElementById('output');
// Make variable to handle the button
const btn = document.getElementById('submitBtn');

// Make a click event
btn.addEventListener('click', evenNumbersOnly);

function evenNumbersOnly() {
  // Get the value and handle empty input
  if (!input.value.trim()) {
    output.innerText = "Please enter some numbers!";
    return;
  }

  // More robust parsing that handles various input formats
  const inputValue = input.value;

  // Create a more flexible regex to extract numbers
  // This will find numbers even with various separators or extra characters
  const numberRegex = /-?\d+(\.\d+)?/g;
  const matches = inputValue.match(numberRegex);

  if (!matches || matches.length === 0) {
    output.innerText = "No valid numbers found. Please enter numbers separated by commas.";
    return;
  }

  // Convert to numbers and filter out NaN
  const numbers = matches.map(num => parseFloat(num)).filter(num => !isNaN(num));

  if (numbers.length === 0) {
    output.innerText = "No valid numbers found after parsing.";
    return;
  }

  // Filter even numbers (only works with integers)
  const evenNumbers = numbers.filter(num => Number.isInteger(num) && num % 2 === 0);

  // Prepare results with more information
  output.innerHTML = `
    <p>Extracted numbers: [${numbers.join(', ')}]</p>
    <p>Even numbers: [${evenNumbers.length > 0 ? evenNumbers.join(', ') : 'None found'}]</p>
  `;
}