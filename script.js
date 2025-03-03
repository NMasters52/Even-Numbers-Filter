const input = document.getElementById('numbersInput');

const output = document.getElementById('output');

const btn = document.getElementById('submitBtn');

btn.addEventListener('click', evenNumbersOnly);


function evenNumbersOnly() {

  //grab the value
  let inputValue = input.value;

  //ready the data
  const numbers = inputValue.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

  //filter the data
  const evenNumbers = numbers.filter(num => num % 2 === 0);


  output.innerText = `[${evenNumbers}]`;

}
