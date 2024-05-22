/* faça um programa onde, chame uma função que calcule a taxa mensal de juros de um investimento

- você deve enviar como argumento da função - valor inicial investido - valor atual do investimento - tempo em mese, que está investido.

calculo tava = juros(valor atual do investimento - valor incial investido) / valor inicial investido * tempo

*/

function calculate(ValorInicial, ValorAtual, tempo){

    const juros = (ValorAtual - ValorInicial) / (ValorInicial * tempo);
    console.log((juros * 100).toFixed(2) + '%');

}

calculate(1000, 1200, 10)



