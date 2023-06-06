const expressionInput = document.getElementById('expression');

function handleButtonClick(value) {
  const currentExpression = expressionInput.value;
  if (isNumeric(value) || isOperator(value) || value === '.') {
    expressionInput.value = currentExpression + value;
  } else {
    alert('Only numbers and operators are allowed!');
  }
}

function calculate() {
  const currentExpression = expressionInput.value;
  try {
    const result = eval(currentExpression);
    expressionInput.value = result;
  } catch (error) {
    alert('Invalid expression!');
  }
}

function clearExpression() {
  expressionInput.value = '';
}

function deleteLastNumber() {
  const currentExpression = expressionInput.value;
  const lastChar = currentExpression.charAt(currentExpression.length - 1);
  if (isNumeric(lastChar)) {
    expressionInput.value = currentExpression.slice(0, -1);
  }
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}
