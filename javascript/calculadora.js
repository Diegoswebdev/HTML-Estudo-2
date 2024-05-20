/* criando uma calculadora com funções */

const calculadora = (number1, number2, operation) =>{
    let resultado = ""

    switch (operation) {
        case "+":
            resultado= number1 + number2
            
            break;
        case "-":
               resultado= number1 - number2
                
            break;
        case "*":
            resultado = number1 * number2
                    
            break;
        case "/":
            resultado = number1 / number2
                    
            break;
    
        default:
            break;
    }

    return resultado


}

console.log(calculadora(2,4, "+"))
console.log(calculadora(2,4, "-"))
console.log(calculadora(2,4, "*"))
console.log(calculadora(2,4, "/"))