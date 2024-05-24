/* 

    FOR EACH   

*/

const students = [
    { name: 'Rodolfo', age: 25},
    { name: 'Maria', age: 43},
    { name: 'João', age: 21},
    { name: 'Bruno', age: 43},
    {name: 'Carla', age: 13},
    { name: 'Ana', age: 20},
    { name: 'Julio', age: 26},
]

let allstudents = 0;

students.forEach((student, index)=> {
    console.log(`O aluno ${student.name}, tem ${student.age} Anos e esta na posição ${index} do Array`)
    allstudents += student.age;
})

const averageAge = allstudents / students.length;

console.log(`A Média de Alunos é de ${averageAge.toFixed(0)}`)

