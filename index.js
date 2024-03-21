const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter op (Either +, -, * or /): ', (op) => {
  rl.question('Enter num1: ', (num1) => {
    rl.question('Enter num2: ', (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let result;
      if (op === '+') {
        result = num1 + num2;
      } else if (op === '-') {
        result = num1 - num2;
      } else if (op === '*') {
        result = num1 * num2;
      } else if (op === '/') {
        result = num1 / num2;
      } else {
        result = "invalid error";
      }
      console.log(`${num1} ${op} ${num2} = ${result}`);
      rl.close();
    });
  });
});