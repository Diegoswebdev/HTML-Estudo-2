/* faça um programa onde ele leia 4 numeros. em cada caso, ele deve retorna a mensagem condizente: - todos os numeros são impares => todos os numeros são pares =>  */

const number1 = 11
const number2 = 10
const number3 = 6
const number4 = 3

if(number1 % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0 && number4 % 2 === 0){
    console.log("Todos os númeoros são pares")
} else if (number1 % 2 !== 0 && number2 % 2 !== 0 && number3 % 2 !== 0 && number4 % 2 !== 0){
    console.log("Todos os númeoros são impares")
}else {
    console.log("Todos os números estão misturados")
}

