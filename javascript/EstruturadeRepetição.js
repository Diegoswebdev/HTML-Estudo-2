/* ESTRUTURA DE REPETIÇÃO - FOR 



*/
const students = ['Bruna', 'Ana', 'João', 'Maria', 'Pedro']
for (let i = 0; i <students.length; i++){
    console.log(`O Aluno ${students[i]} está presente`)
}

/* WHILE(ENQUANTO) */

let i = 0
while(i < 20){
    console.log(i)
    i += 2
}

/* FOR OF */

let myname = 'Diego'
let allname = ['Maria', 'João', 'Pedro', 'Gilberto']

for(let letter of myname){
    console.log(letter)
}

for( letterAll of allname){
    console.log(letterAll)
}


// FOR IN

const student = {
    name: "Caio",
    age: 26,
    genre: "male"
}

for (let property in student){
    console.log(`${property} : ${student[property]}`)
}

