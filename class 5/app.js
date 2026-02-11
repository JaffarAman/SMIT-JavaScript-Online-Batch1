// alert("Hello World!")


// console.log("Allow")

// console.log("Not Allow")



// =
// ==
// ===


// "18" === 18 ==> false

// if Statement


// var userAge = +prompt("Enter your age") // string

// if(userAge === 18){
//     console.log("Allow")
// }else{
//     console.log("not Allow")
// }




// if => condition true
// else = > condition false

// if(condition){
//     // block of statement

// }else {
//     // block of statement
// }





// > , >= , < , <=

// var userAge = +prompt("Enter your age")

// // if(userAge >= 18){
// //     console.log("Allow")
// // }else{
// //     console.log("Not allow")
// // }


// if(userAge <= 18){
//     console.log("Allow")
// }else{
//     console.log("Not allow")
// }

// Data type
// String => group of characters
// number = > 0 to 9
// Boolean = > true / false
// true / false


// if(false){
//     console.log("run If condition")
// }else{
// console.log("Run Else Condition")
// }


// multiply condition
// else if

// var gender = "asjkdjsakdkjsankjdsajdka"
// // if
// // else if


// if (gender === "male") {
//     console.log("join male whatsapp group")
// } else if (gender === "female") {
//     console.log("join female whatsapp group")

// } else if(gender=== "others"){
//     console.log("join others whatsapp group")
// }
// else {
//     console.log("Invalid Value")
// }



// num1
// operator == + - * /
// num2 

// var num1 = +prompt("Enter num1");
// var opt = prompt("Enter opt" , "+,-,/,*");
// var num2 = +prompt("Enter num2");



// if(opt === "+"){
//     console.log(num1 + num2 , "addition")
// }else if(opt === "-"){
//         console.log(num1 - num2 , "sub")
// }else  if (opt === "*"){
//         console.log(num1 * num2 , "mul")
// }else  if (opt === "/"){
//         console.log(num1 / num2 , "div")
// }else{
//     console.log("Invalid Opt")   
// }

// console.log(num1 , "num1")
// console.log(opt , "opt")
// console.log(num2 , "num2")



// Gates 
// && => And gate
// || => or gate

// main gate 



// && Gate
// dono condition true honi chaye
// condition1 && condition2
// true      &&  true


// || Gate
// condition1 || condition2
// agar dono condition main sy koi ek b true hogayi main condition true krdo ga

// And Gate
// true && true = true
// false && true = false
// true && false = false
// false && false = false


// || Gate
// true || true = true
// true || false = true
// false || false = false




// var userAge = 15


//   true       &&     true
//   false      &&     true
// if(userAge >= 18 &&  userAge <=50  ){
//         console.log("Allow")
// }else {
//     console.log("not allow")
// }



// male/female



// var gender = "other"


// false     ||      false
// if(gender === "male"  || gender === "female" ){
//         console.log("Allow")
// }else{
//         console.log("Not Allow")
// }


// var userAge = 110

// if(true && false){
//     console.log("If condition")
// }else{
//     console.log("else condition")
// }


// alert("NAMAZ BREAK")


// var userAge = +prompt("Enter your age");
// var userGender = prompt("Enter your gender");




//                      false            &&  (true)
// if(userAge >= 18 && userAge <=50 && (userGender === "male" || userGender === "female") ){
//     console.log("Allow")
// }else{
//     console.log("Not Allow")
// }





// true false

// 25
//  true        &&  true = true  &&   true


// true     &&  false
// false                &&   true
// if(userAge >= 18 && userAge <=50 && userGender === "male" ){
//     console.log("Allow")
// }else{
//     console.log("Not Allow")
// }





// 80+ => A+
// 70+ < 80 A
// 60+ < 70 B
// 50+ < 60 C
// 40+ < 50 D
// 0+ < 40 fail

// obt mark
// total mark 500


// per   obt / tot * 100

// 70
// var percentage = 99

// if(percentage >=80  &&  percentage <=100 ){
//     console.log("A+")
// }else if(percentage >=70 && percentage <=80){
//     console.log("A")
// }else if(percentage >=60 && percentage <=70){
//     console.log("B")
// }else if(percentage >=50 && percentage <=60){
//     console.log("C")
// }else if(percentage >=0 && percentage <=50){
//     console.log("MASHAALLAH sy FAIL ho ")
// }else{
//         console.log("Invalid Percentage")
// }   




// nested condition
// HTML nested list li 


// create static user
var systemEmail = "admin@gmail.com";
var systemPassword = "admin12345";




var userEmail = prompt("Enter your email");
var userPassword = prompt("Enter your Password");


if (userEmail === systemEmail) {
    console.log("emial verify")
    
    // Nest condition
    if (userPassword === systemPassword) {
        console.log("Login");
    } else {
        console.log("Password invalid")
    }



} else {
    console.log("invalid email address")
}



// if(userEmail === systemEmail &&  userPassword === systemPassword  ){
//     console.log("Login")
// }else{
//     console.log("Invalid email OR Password")
// }
