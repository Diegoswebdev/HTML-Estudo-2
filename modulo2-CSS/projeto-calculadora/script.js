function insert(num){
    let numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('Resultado').innerHTML = "";
}

function back(){
    let Resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = Resultado.substring(0, Resultado.length -1)
}

function operation(){
    let Resultado= document.getElementById('Resultado').innerHTML

    if(Resultado){
        document.getElementById('Resultado').innerHTML = eval(Resultado)
    }else {
        document.getElementById('Resultado').innerHTML = "N/A"
    }
    
}