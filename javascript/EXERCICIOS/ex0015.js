/*faça um programa que receba 3 numeros inteiros, e deve imprimir, qual é o maior, qual é o menor. */

const numbers = [44, 20, 99];

if(numbers[0] > numbers[1] && numbers[0] > numbers[2]){
    console.log("o primeiro e maior")

} else if (numbers[1] > numbers[2]){
    console.log("o segundo é o maior")
}else {
    console.log("o terceiro é o maior")
}

if(numbers[0] < numbers[1] && numbers[0] < numbers[2]){
    console.log("o primeiro e menor")

} else if (numbers[1] < numbers[2]){
    console.log("o segundo é menor")
}else {
    console.log("o terceiro é o menor")
}