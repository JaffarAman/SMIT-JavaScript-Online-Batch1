// primitive data types -- by value

// String
// Number
// Boolean
// null
// undefined



// non primitive data types - Reference data type -- by reference
// Array
// // Object
// let b = 100
// let c = b //100

// b = 200

// console.log(c) //

// ref=> 34343

// let obj1 = {
//     a  :100
// }

// let obj2 = obj1  //by reference //34343

// obj1.a = 200 

// console.log("obj1" , obj1) 
// console.log("obj2" , obj2)




// const std1 = {
//     name : "Jaffar"
// }

// const std2 = std1


// std1.name = "jaffar aman"


// console.log(std1 , "std1") //jaffar aman
// console.log(std2 , "std2") // jaffar


// Spread Opt (...Three dots)

// const std1 = {
//     name : "Jaffar",
//     age : 25,
//     gender : "male"
// } 

// const std2  = {...std1}

// std1.name = "Sufiyan"
// console.log(std2)


// const arr1 = ["karachi"]

// const arr2 = [...arr1]


// arr1[0] = "lahore"


// console.log(arr1 , "arr1")
// console.log(arr2 , "arr2")

// shallow or deep copy



// const std1 = {
//     name : "Jaffar",
//     age : 25,
//     gender : "male",
//     courses : {
//         html : 100
//     } 
// }  

// // const std2 = {...std1} //shallow copy

// const std2 =  JSON.parse(JSON.stringify(std1))


// std1.name = "Sufiyan"
// std1.courses.html = "10000000000"

// console.log(std1 , "std1")
// console.log(std2 , "std2")


// Browser Storage

// let userName =  localStorage.getItem("userName");

        
// const updateUserName = ()=>{
//         const user = prompt("Enter your name!")
//         localStorage.setItem("userName" , user)
//         // userName = user
//         console.log(user)
// }

// console.log(userName)


// const obj1 = {
//     name : "Jaffar",
//     age : 25,
//     gender : "male"
// }

// const objStringify = JSON.stringify(obj1)
// console.log("objStringify" , objStringify) 



// localStorage.setItem("stdObj" , objStringify)


// const getObj = JSON.parse( localStorage.getItem("stdObj"))

// console.log("getObj" , getObj)


// recursive function


// let counter = 0
// const foo = ()=>{
//     counter++
//     console.log(counter)

//     if(counter < 10){
//         foo()
//     }
// }

// foo()
