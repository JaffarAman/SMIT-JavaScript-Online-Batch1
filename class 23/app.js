// Async
// 1. Promises
// 2. Async / await
// 3. callback

// pending
// fulfilled
//reject

// const myPromise = new Promise( (resolve , reject)=>{
//     const isLogin = true //api calling  
//     if(isLogin){

//         resolve({
//             message : "user successfully login!"
//         })

//     }else{
//         reject({
//             message : "Invaid email or passsword" 
//         })
//     }
// });

// myPromise.then((success)=>{
//     console.log("success" , success)
// })
// .catch((error)=>{
//     console.log("error" , error)

// })



// async await
// try catch


// const userLogin = async ()=>{
//     // const isLogin = await true //api calling
//     // console.log(isLogin)
        
//    try {
//      console.log("start")
//     const fetchJobs = await fetch("https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=").then(res=>res.json())
//     console.log("fetchJobs" , fetchJobs)
//     console.log("end")
//     console.log("Hello world")

//    } catch (error) {
//         console.log("error" , error)
//    }


// }

// userLogin()

// console.log("End")


// const foo = ()=>{   
//     try{
//         // console.log("start")
//         // console.log(10+20)
//         // console.log("jaffar aman")
//         // console.log(fullName) //error

//         const userName = prompt("Enter your name")
//         if(userName !== "jaffar"){
//             throw Error("Username is not equal to Jaffar")
//         }

//         console.log("userName is equal to jaffar")

//     }catch(error){
//         console.log("error" , error)
//     }
// }

// foo()

// console.log("end")







// const myPromise = new Promise( (resolve , reject)=>{
//         fetch("api call")
//         .then(res=>res.json())
//         .then(()=>{
//             resolve()
//         })
//         .cathc(()=>{
//             reject()
//         })

// });

// const myPromise = new Promise( async (resolve , reject)=>{
//     try {
//         const data = await fetch("api calling")
//             console.log("yeh line run hogi")
//             resolve()

//     } catch (error) {
//             console.log("error" , error)
//         reject()
//         }    
    


// })
// .then
// .catch

// classes

// {
//       this.name = name;
//             this.age  = age
//             this.email  = email
//             this.address  = address
//     teacherid
// }
// var name = "jaffar"
// name = 100

// class

class Std{
    constructor(name , age , email , address){
            this.name = name;
            this.age  = age
            this.email  = email
            this.address  = address
    }

}


class Teacher extends Std {
        constructor(name , age  ,email , address , teacherId){
                super(name , age  ,email , addres)
                this.teacherId = teacherId
        }
}

const std1 = new Std("Jaffar" , 25 , "amanjaffar50@gmail.com" , "Karachi")

const t1 = new Teacher("Aman")

console.log(t1)
console.log(std1)
