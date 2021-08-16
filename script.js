function add(a, b) {
   return +a + +b 
}
function subtract(a, b) {
   return +a - +b
}
function multiply(a, b) {
   return +a * +b
}
function divide(a, b) {
   if (!+b) {
      return "Error"
   }
   return +a / +b
}
function operate(operator, a, b) {
   switch (operator) {
      case "+":
         return add(a, b)
      case "-":
         return subtract(a, b)
      case "*":
         return multiply(a, b)
      case "/":
         return divide(a, b)
      }
   }
let inputString = ''
let currentInput = ''
let previousInput = ''
let outputString = ''
let currentOperation = ''

const inputField = document.querySelector('.display__input')
const outputField = document.querySelector('.display__output')
const numberButtons = document.querySelectorAll('.buttons__numbers button')
const operatorButtons = document.querySelectorAll('.operator')
const dropButton = document.querySelector('#back')
const clearButton = document.querySelector('#clear')
const equalsButton = document.querySelector('#equals')

function handleInput(e) {
   currentInput += e.target.textContent
   outputField.textContent = currentInput
}
function dropDigit() {
   if (typeof currentInput === 'number') {
      clearScreen()
   }
   currentInput = currentInput.slice(0,currentInput.length-1)
   outputField.textContent = currentInput
}
function clearScreen() {
   inputString = ''
   currentInput = ''
   previousInput = ''
   outputString = ''
   currentOperation = ''
   inputField.textContent = currentInput
   outputField.textContent = outputString
}
function handleOperator(e) {
   if (currentInput) {
      if (currentOperation) {
         handleEquals()
      }
      currentOperation = e.target.textContent
      previousInput = currentInput
      currentInput = ''
      outputField.textContent = ''
      inputField.textContent = previousInput + ' ' + currentOperation
   }
}
function handleEquals() {
   if (currentInput && currentOperation) {
      inputField.textContent += ' ' + currentInput 
      currentInput = operate(currentOperation, previousInput, currentInput)
      outputField.textContent = currentInput
   }
}
function handleNewNumber(e) {
   clearScreen()
   handleInput(e)
   numberButtons.forEach(button => button.removeEventListener('click', handleNewNumber))
}
function handleNewOperator() {
   numberButtons.forEach(button => button.removeEventListener('click', handleNewNumber))
}
function handleNewInput(e) {
   numberButtons.forEach(button => button.addEventListener('click', handleNewNumber))
   operatorButtons.forEach(button => button.addEventListener('click', handleNewOperator))
}

numberButtons.forEach(button => button.addEventListener('click', handleInput))
operatorButtons.forEach(button => button.addEventListener('click', handleOperator))
dropButton.addEventListener('click', dropDigit)
clearButton.addEventListener('click', clearScreen)
equalsButton.addEventListener('click', handleEquals)
equalsButton.addEventListener('click', handleNewInput)