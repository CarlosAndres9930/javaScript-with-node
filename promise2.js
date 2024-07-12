const verifySale=(value)=>{
    return new Promise((resolve, reject)=>{
        if(value>1000){
            resolve(value*1.10)
        }else{
            reject(value*0.93)
        }
    })
}
verifySale(1000)
.then(result=>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
})