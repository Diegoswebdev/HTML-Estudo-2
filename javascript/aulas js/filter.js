const list = [
         {name: "Rodolfo", vip: true},
         {name: "Maria", vip: false},
         {name: "João", vip: true},
         {name: "Bruno", vip: true},
         {name: "Carla", vip: false},
         {name: "Ana", vip: true},
         {name:"Julio", vip: false},
];

const newList = list.filter(client => client.vip);

console.log(newList)

const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name:"Julio", testGrade: 10},
];

const StudentsApproved = students.filter(student => student.testGrade >= 7)

console.log(StudentsApproved)
