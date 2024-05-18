/* faça um programa que gere um numero aleatorio entre 1 e 10, esse numero é o número 'ganhador. entrão ele tambem irá gerar um número aleatorio entre 1 e 10, e verificar se a pessoa ganhou ou não. em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.'*/

const personwinner = Math.floor(Math.random()* (10-1) +1);
const numberA = Math.floor(Math.random()*(10-1)+1);
console.log(`Numero sorteado foi ${numberA}`)
console.log(`Seu numero é ${personwinner}`)


if(numberA === personwinner){
    console.log("Você foi o ganhador")
}else {
    console.log("tente novamete")
}