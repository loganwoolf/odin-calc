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
         break
      case "-":
         return subtract(a, b)
         break
      case "*":
         return multiply(a, b)
         break
      case "/":
         return divide(a, b)
         break
      }
   }

let inputString = "";
let outputString = "";

const inputField = document.querySelector('.display__input')
const numberButtons = document.querySelectorAll('.buttons__numbers button')
const dropButton = document.querySelector('#back')

function handleInput(e) {
   inputString += e.target.textContent
   inputField.textContent = inputString;
}
function dropDigit() {
   inputString = inputString.slice(0,inputString.length-1)
   inputField.textContent = inputString
}

numberButtons.forEach(button => button.addEventListener('click', handleInput))
dropButton.addEventListener("click", dropDigit)

