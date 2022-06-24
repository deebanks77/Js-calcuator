const num1 = prompt("Enter first number");
const operator = prompt("Operator choice: + - / *");
const num2 = prompt("Enter second number");

function calculation(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = Number(num1) + Number(num2);
    alert(result);
  } else if (operator === "-") {
    result = Number(num1) - Number(num2);
    alert(result);
  } else if (operator === "/") {
    result = Number(num1) / Number(num2);
    alert(result);
  } else if (operator === "*") {
    result = Number(num1) * Number(num2);
    alert(result);
  }
}

calculation(num1, num2, operator);
