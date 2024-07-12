const users = [
    {
        user:'admin',
        password:'1234',
        status: true
    },
    {
        user:'student',
        password:'1111',
        status: false
    }
]
const searchStudent = () =>{
    return new Promise((resolve, reject) =>{
        let foundUser = users.find(user => user.user === 'admin' && user.password === '1234');
        if(foundUser){
            resolve('Login successful')
        } else {
            reject('Invalid credentials')
        }
    })
}
searchStudent('admin','1234')
.then(result =>{
    
})