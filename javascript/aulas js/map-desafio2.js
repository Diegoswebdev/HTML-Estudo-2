const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name:"Julio", testGrade: 10},
];
 
 
 
 
 // 1° verificaçao com "if"
 
//  const StudentsApproved = students.map(student=>{
//      let approvedOrnot

//      if(student.testGrade >= 7){
//          approvedOrnot = "Approved"
//      }else {
//          approvedOrnot = "disapproved"
//      }

//      const students = {
//          name: student.name,
//          finalResult: approvedOrnot        

//      }
//     return students
//  })
//console.log(StudentsApproved)


 // 2° com operador ternario "?, :"
const StudentsApproved = students.map(student=>{
    const students = {
        name: student.name,
        finalResult: student.testGrade >= 7 ? 'Appreved' : 'Repproved'
    }
    return students
    })

    console.log(StudentsApproved)