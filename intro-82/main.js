function showMassage (имя) {
  return 'Hello "аргумент функции"'
}
const result = showMassage()
console.log(result)

// // -------------------------------

const numbers = [8, 9, 10, 11, 12]

function checkForCopyItem(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return item
    }
  }
  return `There is no such item in the array`
}

console.log(checkForCopyItem(numbers, 11))
console.log(checkForCopyItem(numbers, 12))

// -----------------------------------

function differenceNumbers(num1, num2) {
  return num1 - num2
}
const difference = differenceNumbers(2, 3)
console.log(difference)


function sumNumbers(num1, num2) {
  return num1 + num2
}
const sum = sumNumbers(2, 3)
console.log(sum)


function multiplicationNumbers(num1, num2) {
  return num1 * num2
}
const multiplication = multiplicationNumbers(2, 3)
console.log(multiplication)


function divisionNumbers(num1, num2) {
  return num1 / num2
}
const division = divisionNumbers(2, 3)
console.log(division)
