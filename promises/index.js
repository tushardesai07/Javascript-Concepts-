let score=35;

let pro = new promises((resolve,reject)=>{
    if (score=35){
        resolve("pass")
    }else{
        reject("fail")
    }
})
.then((result)=>console.log(result))
.catch((err)=>console.log(err))
.finally(()=>console.log("done"))