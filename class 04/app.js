// alert("Hello Class")


// + => addition , concate
// number data type + number data type => addition 
// string data type + number data type => concate 

// var num1 = 100; //string 
// var num2 = 200  ////string 
// var result = num1 + num2

// console.log(result)




// var num1 = 40;



// // num1 = num1 + 5

// num1 += 5

// console.log(num1)



// var num1 = 9



// // num1 = num1 + 1
// // num1 += 1

// // Post Increment
// // num1++

// // Post decrement
// num1--


// console.log(num1);



// // num1++ //post increment
// num1-- //post decrement

// console.log(num1)


// Post /PRE increment
// PRE ++a

// var a  =  10 // 11
// // var b = a++//phely value print karo phr value add karo
// var b = ++a      //phely value add karo phr value print karo

// console.log(b)
// console.log("a" , a)



// // POST ==> phely print phr add
// // PRE ==> phely add phr print




// var a  = 5  //6 //5 /6 /7 /6 /7



// var res = ++a + a - a-- + ++a  + a++ - --a + ++a +a
// //      = 6   + 6 - 6   + 6     + 6  -  6  + 7  + 7
// //      = 6      + 6       + 7  + 7
// console.log(res)



// var res = a++ + a + ++a + a
// //      =  10 + 11 + 12 + 12
// console.log(res)


// var res = a + a++ + a++
//     = 10 + 10  + 11
// console.log(res)


// var res = a++ + a
// //      =  10  + 11

// console.log(res)



// Prompt =>



// var userName = "Jaffar Aman"; //static
// alert(userName)


// var userName =  prompt("Enter your Name" , "John Doe" ) //user input
// alert("welcome " + userName)


// +prompt ==> number data type convert
// var num1 = +prompt("Enter your num1")
// var num2 = +prompt("Enter your num2")
// var res = num1 + num2
// console.log(res)

// alert("Namaz Break!")



// console.log()
// alert()

// document.writeln("Jaffar Aman")

// document.writeln("<h1>Jaffar Aman </h1>")

// var userName = "Muhammad Sufiyan";
// var userName = prompt("Enter your name!")
// document.writeln("<h1> Welcome: " + userName + "</h1>" );


// conditions
// If else

// console.log("Allow");
// console.log("not Allow");


// if => true
// else => false

// if(condition) {
//     // block of statment
// } 
// else {
//     // block of statment

// }   

// =
// == ==> equal to sign ==
// ===

// ==  > sirf value check 
// ===  > sirf value check & data type 

// var userAge = "18"

// if(userAge === "18"){
//     console.log("Allow")
// }else{
//     console.log("Not Allow")
// }

// console.log(userAge)




// var userGender = "other" //static
// var userGender = prompt("Enter your gender!")


// if(userGender === "female"){
//     console.log("Allow online female whatsapp group")
// }else{
//     console.log("Not Allow")
// }


// =
// 10 > 5 = > true
// 10 > 100  => false
// >=
// >,  >=
// <,  <=



// if(userAge === 25){
    //     console.log("allow")
    // }else{
        //     console.log("not allow")
        // }
        
        
var userAge = +prompt("Enter your age")


if(userAge <= 18){
    console.log("allow");
    
}else{
    console.log("Not allow")
}


// if(userAge >= 18){
//     console.log("allow")
// }else{
//     console.log("not allow")
// }


