// console.log("Hello Class 11")
// var obtMarks = 329
// var totalmarks = 500
// var per = (obtMarks / totalmarks) * 100

// var roundOffValue = Math.round(per)

// console.log(per)
// console.log("roundOffValue" , roundOffValue)


// Math.round -> roundoff
// Math.floor -> sirf integar value
// Math.ceil -> agar decimal value hai tw plus 1

// var value = 234.1
// // console.log(Math.round(value))
// // console.log(Math.floor(value))
// console.log(Math.ceil(value))

// 1 to 6

// var val = Math.floor(Math.random() * 6 + 1 )
// console.log(val)


// string to number type conversion
// var num1 = +prompt("Enter num1")
// var num2 = +prompt("Enter num2")
// console.log(num1 + num2)


// var num1 = Number("100.56")
// console.log(typeof num1)
// console.log(num1)

// var num1 = parseInt("48.99999")
// var num1 = Number("48.99999")
// console.log(typeof num1)
// console.log(num1)



// convert number into string
// var val = String(121)
// var val = 120

// console.log(typeof val.toString() )



// var num1 = 100
// var num2 = 200
// // var add = num1.toString() + num2.toString()
// var add = String(num1) + String(num2)
// console.log(add)


// handle decimal length
// roundoff
// convert string
// var per = 58.128379812738123
// console.log(typeof per.toFixed(2))



// var now  = new Date().toString()
// console.log(now.slice(0,3))  

// var now = new Date().toDateString()
// var now = new Date().toLocaleDateString()

// var now = new Date().toTimeString()
// var now = new Date().toLocaleTimeString()
// var now = new Date()
// console.log(now)
// alert("NAMAZ BREAK!")

// 1 jan 1970 sy ly abhi current

// var now = new Date().getDay()
// var now = new Date().getMonth()
// var now = new Date().getDate()
// var now = new Date().getFullYear()
// var now = new Date().getTime()
// console.log(now)

var userDob = prompt("Enter your DOB" , "09 feb 2000" )

var dobDate  = new Date(userDob);
var dobMiliSec = dobDate.getTime() //1 jan 1970

var now = new Date();
var nowMiliSec = now.getTime()

var diff = nowMiliSec - dobMiliSec

var calcYear = Math.floor( diff / (1000 * 60 * 60 * 24 * 365)) 
console.log(calcYear)