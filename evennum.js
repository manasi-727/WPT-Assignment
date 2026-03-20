const readline = require("readline");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for input
rl.question("Enter numbers: ", (input) => {
  const numbers = input.split(" ");
  let evenSum = 0;

  for (const numStr of numbers) {
    const num = Number(numStr);

    if (!isNaN(num) && num % 2 === 0) {
      evenSum += num;
    }
  }

  console.log(`The sum of even numbers is: ${evenSum}`);

  rl.close();
});