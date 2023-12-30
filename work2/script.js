function checkOddEven() {
  let number = parseInt(document.getElementById("numberInput").value);
  let oddevenDisplay = document.getElementById("oddevenDisplay");

  if (number % 2 === 0) {
    oddevenDisplay.innerHTML = `ANSWER: ${number} is an even number.`;
  } else {
    oddevenDisplay.innerHTML = `ANSWER: ${number} is an odd number.`;
  }
}

function generateFibonacciSequence() {
  let count = parseInt(document.getElementById("countNum").value);
  let sequenceDisplay = document.getElementById("sequenceDisplay");

  let sequence = "";

  let a = 0,
    b = 1;

  for (let i = 0; i <= count; i++) {
    sequence += a + (i <= count - 1 ? ", " : "");
    [a, b] = [b, a + b];
  }

  sequenceDisplay.innerHTML = `ANSWER: ${sequence}`;
}

function calculateFactorial() {
  let number = parseInt(document.getElementById("factorialInput").value);
  let factorialResult = document.getElementById("factorialResult");
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  factorialResult.innerHTML = `Factorial of ${number} is ${factorial}.`;
}
