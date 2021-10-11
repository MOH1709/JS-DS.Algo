const str = "A + (B * C - ((D / E) ^ F) * G) * H";

console.log(infixToPostfix(str));

//---------------------------------- Main ----------------------------------
function infixToPostfix(str = "") {
  let stack = []; // 4 represents precedence value of "("
  let expression = [];

  str = `(${str})`.split(" ").join(""); // add "(" && ")" && remove blank spaces

  for (let char of str) {
    var precedence = getPrecedence(char);
    var n = stack.length - 1;

    if (char === ")") {
      while (stack[n] !== "(") {
        expression.push(stack.pop());
        n--;
      }
      stack.pop();
    } else if (char === "(") {
      stack.push(char);
    }
    // if char is number or alpha
    else if (precedence === 0) {
      expression.push(char);
    }
    // if char is Mathematical operator
    else {
      while (precedence <= getPrecedence(stack[n])) {
        expression.push(stack.pop());
        n--;
      }
      stack.push(char);
    }
    // To Print Stack and Expression table
    // console.log(stack.join("") + "    =>   " + expression.join(""));
  }
  return stack.length === 0 ? expression.join("") : "Expression Invalid";
}

//---------------------------------- Get Precedence ----------------------------------
function getPrecedence(symbol) {
  let precedence = 0;
  switch (symbol) {
    case "^":
      precedence = 3;
      break;
    case "*":
    case "/":
      precedence = 2;
      break;
    case "+":
    case "-":
      precedence = 1;
      break;
    default:
      precedence = 0;
  }

  return precedence;
}

module.exports = infixToPostfix;
