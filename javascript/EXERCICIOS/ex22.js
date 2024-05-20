/* ESCREVA UM PROGRAMA ONDE, VOCÊ CHAME UMA FUNÇÃO ENVIANDO UM NÚMERO (ACEITAR SOMENTE ENTRE VALORES ENTRE 1 E 10) ESCREVER NA A TABUADA DE 1 A 10 DO VALOR LIDO. */

const table = (number) => {
    if (number > 10 || number < 1){
        console.log("Aceitamos número somente entre 1 e 10")
    }
    for(let i = 1; i <= number; i++){
        console.log(`${i} x ${number} = ${i * number}`)
    }

}

table(10)