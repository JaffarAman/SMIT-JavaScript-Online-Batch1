
// function greet(userName = "SMIT"){
//     alert("Hello " + userName)
// }

// greet("jaffar")

// var arrCopy =  slice(starting , ending)


// function add(num1 = 0 , num2 = 0){
//     var result = num1 + num2

//     return  result

// }


// var value  = add(100 , 200)

// console.log("value" , value)


///funtion khatam tata bye bye

//  global scope variable vs local scope variable

// 1.global variable
// var userName = "Jaffar"



// function foo(){
//     console.log(userName)
// }

// foo()






// function foo(){
//     //local scope variable
//     var userName = "Jaffar Aman" //create
//     console.log("inside the function" , userName)
// }



// foo()

// console.log("outside the function" , userName)


// var  => function scope variable
// let
// const


//global scope 
// var userName = "Jaffar";

// function foo(){
//     var userName = "Jaffar Aman" //create
//     console.log(userName)
// }
// foo()



// console.log("outside the function" ,userName)




// function greetUser(){
//     var userInput = prompt("Enter your Name!")
//     console.log(userInput)
//     alert("Welcome " + userInput )
// }

// Get Input Value
// function greetUser(){
//     var userName = document.getElementById('userName') 
//     console.log("input" , userName.value)
//     alert("Welcome " + userName.value)
// }

// function setInputValue(){
//     var userInput = document.getElementById("userName")
//     console.log(userInput)
//     userInput.value = "Saylani"

// }


// alert("NAMAZ BREAK!")

function addNumber(num){
    var input  = document.getElementById("input")
    console.log("input" , input) 
    // input.value = input.value + num
    input.value += num
}

function calcAns(){
        var input = document.getElementById("input")
        // console.log(eval(input.value))
        var ans = eval(input.value)
        input.value = ans 

}


function clearValue(){
        var input = document.getElementById("input")
        // console.log("input" , input.value)
        // console.log("input" , input.value.slice(0 , -1))

        input.value = input.value.slice(0 , -1)
}