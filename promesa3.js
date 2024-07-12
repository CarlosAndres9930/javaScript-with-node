//Crear una promesa que reciba el documento, nombres y apellidos y si los datos no son vacios
//los inserte en un array de objetos

const students = []
const addStudent = (document, firstName, lastName) => {
    return new Promise((resolve, reject)=>{
        if(document !='' && firstName !='' && lastName !=''){
            students.push({
                //Lo que esta antes de los dos puntos es la KEY o ID(dentro del array cual es al atributo)(ESTO ES JSON) y después el VALUE
                document: document,
                firstName: firstName,
                lastName: lastName
            })
            resolve('Student added successfully')
        } 
        else{
            reject(new Error('Error. Data cant be null'))
        }
    })
}
addStudent(1111,'','Santa')
.then(result => {
    console.log (students)
})
.catch(error => {
    //Como es 
    console.log(error.message)
})