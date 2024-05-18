/*Crie 5 um objeto nesse formato{nome:"", idade:"", sexo:"", profissão:"", Nacionalidade:""} ao roda o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser maior de idade e brasileira para ser apravada. */

const Dados = {
    nome:"Diego", 
    idade: 10, 
    sexo:"Masculino", 
    profissão:"Comerciario", 
    Nacionalidade:"Brasileiro"
}

if(Dados.idade >= 18 && Dados.Nacionalidade === "Brasileiro"){
    console.log("Você passou no processo")    
}else {
    console.log("você não passou no processo")
}