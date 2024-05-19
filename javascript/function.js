// funções // functions

function print(){
    console.log("Estou aprendendo javascript");
}

print() // invocando a função


// function - argumento and parameters

function soma (number1, number2){ // void / vazia
    console.log(number1 +number2)
}

soma(2,6)


const number1 = 10
const number2 = 20

function soma2(number1, number2){
    return number1 + number2
}

console.log(`O primeiro numero é ${number1}`)
console.log(`O segundo numero é ${number2}`)
console.log(`A soma entre ${number1} e ${number2} é ${soma2(number1, number2)}`)

// funções anônima

const soma3 = function (number1, number2){
    return number1 + number2
}

console.log(`O primeiro numero é ${number1}`)
console.log(`O segundo numero é ${number2}`)
console.log(`A soma entre ${number1} e ${number2} é ${soma2(number1, number2)}`)

// Arrow functions

const soma4 = (number1, number2 )=> {
    return number1 + number2
}

console.log(`O primeiro numero é ${number1}`)
console.log(`O segundo numero é ${number2}`)
console.log(`A soma entre ${number1} e ${number2} é ${soma2(number1, number2)}`)










