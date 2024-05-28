/*
- Cria um novo array, a partir do array percorrido (array original)
- Cria um novo array, com a mesmo quantidade de itens do array original
- Aceita 3 parâmetros
    - item do array
    - index
    - array completo

*/

 const numbers = [10, 20 , 30, 5]
// const students = [
//     {name: "Rodolfo", age: 25},
//     {name: "Maria", age: 43},
//     {name: "João", age: 21},
//     {name:"Bruno", age:43},
//     {name:"Carla", age:13},
//     {name: "Julio", age:26}
// ];

// const NewArray = numbers.map((number)=>{
//     const NewNumber = number + 10 * 2 / 3
    
//     return NewNumber * 2
    
// })

// const NewStudents = students.map((student) =>{
//     const NewStudent = {
//         name: student.name + 'da silva',
//         age: student.age - 5
//     }
//     return NewStudent
// })

// console.log(NewStudents)


// const NewArray0 = numbers.map(function(number){
//     return number * 3
// })

// const NewArray1 = numbers.map((number)=>{
//     return number *3
// })

// const NewArray2 = numbers.map(number => number * 3)


const double = number => number *3
const toReais = number => `R$ ${number.toFixed(2)}`

const NewArray2 = numbers.map(double).map(toReais)

console.log(NewArray2)


