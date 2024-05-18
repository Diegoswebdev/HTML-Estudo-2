/* FAÇA UM PROGRAMA QUE VERIFICA SE UMA PESSOA É BRASILEIRA OU NÃO. // DEVE SER UM OBJETO*/

const person = {
    nome: "Maria",
    idade: 23,
    nacionalidade: "Argentino"
}

if (person.nacionalidade === "Brasileiro"){
    console.log(`A ${person.nome} é Brasileiro`)
} else {
    console.log(`${person.nome} é Estrageira`)
}