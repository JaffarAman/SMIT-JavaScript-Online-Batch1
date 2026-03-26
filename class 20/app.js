// 3 keyword
// var
// let
// const

// var userName = "jaffar Aman"
// var userName = "bilal"
// console.log(userName)














// var userName = "Sufiyan"

// console.log("2nd time"  , userName)



// let userName = "Jaffar";
// userName = "Aman"


// // let userName = "Aman"
// console.log(userName)


// const adminEmail = "admin@gmail.com"


//  adminEmail = "admin1@gmail.com"
// console.log(adminEmail)




// var firstName;

// let firstName;


// firstName = "Jaffar Aman"

// console.log(firstName)

// const firstName;


// variable scope


// var b =  20 //global scope

// function foo(){
//     // console.log(b)
//     let a  = 10 
// }

// foo()
// console.log(a)



// block scope = let or const

// if(true){
//     const userName = "Jaffar"
// }

// console.log(userName)

// var  => function scope
// let => block scoped
// const => block scoped



// hoisting


// var userName;
// var userAge;
// var userGender;









// console.log(userName)

// let userName = "Jaffar Aman"




// let firstName = "Jaffar";
// let lastName = "Aman"
// const fullName = `${firstName} ${lastName}`

// console.log(fullName)



// Arrow function

// function foo(){
//     console.log("Hello World")
// return 100
// }


// foo()

// Arrow function

// const foo =  num1 =>{
//     console.log("Hello world " , num1 )
// }

// foo(100  ,200)

// const foo = _ =>{
//         console.log("Hello")
// }

// foo()

// function foo(){
//     return "saylani"
// }

// const result = foo()
// console.log(result)

// const foo = () => {
    
//  return    "saylani"

// }

// const foo = () => "saylani"


// const result = foo()
// console.log(result);

// const stdObj = {
//     firstName : "Jaffar",
//     getName : function(){
//             console.log(this) // parent obj
//     }
// }



const stdObj = {
    firstName : "Jaffar",
    getName : ()=>{
            console.log(this) //window object
    }
}

stdObj.getName()