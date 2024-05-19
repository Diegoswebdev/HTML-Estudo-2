/* faça um programa onde leia um numero e diga se ele é: impar, par e um numero primo e impar é par e divisivel por 5 */

const number = 25

if (number % 2 === 0) {
    if (number % 5 === 0) {
        console.log("o número é par NÂO é divisivel por 5")
    } else {
        console.log("o número é par e NÂO é divisível por 5")
    }


} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log("ele é impar, mas não é primo")
            break
        } else {
            if (i === number - 1)
                console.log("Ele é um número primo")

        }
    }

}