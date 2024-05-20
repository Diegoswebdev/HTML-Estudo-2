/*  ESCREVA UM PROGRAMA ONDE, VOCÊ CHAME UMA FUNÇÃO, E ELA DIGA A HORA EXATA! */

const hora = new Date().getHours()
const minutos = new Date().getMinutes() 
const HoraAtual = () => {
    console.log(`${hora}:${minutos}`)    
}

HoraAtual()