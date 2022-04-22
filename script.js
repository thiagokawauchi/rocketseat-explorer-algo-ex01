let firstNumber = Number(prompt('Digite o primeiro número:'))
let secondNumber = Number(prompt('Digite o segundo número:'))

let sum = firstNumber + secondNumber
let subtraction = firstNumber - secondNumber
let multiplication = firstNumber * secondNumber
let division = firstNumber / secondNumber
let rest = firstNumber % secondNumber

let evenOrOdd = ''
let equality = ''

if (sum % 2 === 0) {
    evenOrOdd = 'Par'
} else {
    evenOrOdd = 'Ímpar'
}

if (firstNumber === secondNumber) {
    equality = 'Iguais'
} else {
    equality = 'Diferentes'
}

alert(`A somo dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${subtraction}`)
alert(`A multiplicação dos dois números é ${multiplication}`)
alert(`A divisão dos dois números é ${division}`)
alert(`O resto dos dois números é ${rest}`)
alert(`A soma dos dois números é ${evenOrOdd}`)
alert(`Os dois números são ${equality}`)
