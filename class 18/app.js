// var stdArr = ["Jaffar" , 100 , 24 , 2026 , "Karachi" , "head office"];
// // stdArr[10] = "saylani"
// console.log(stdArr[0])
// console.log(stdArr[1])

// []

// Objects
// prop = key or value pair
// key : value

// var stdObj = {
//     userName : "Jaffar",
//     id : 100 ,
//     age : 24,
//     batchYear : 2026,
//     city : "Karachi",
//     campus : "Head office"
// }
// console.log(stdObj['city'])
// console.log(stdObj.batchYear)

// console.log(stdObj["userName"]) //array notation
// console.log(stdObj["age"]) //array notation
// console.log(stdObj.campus) //dot notation

// var stdObj = {
//     userName : "Jaffar",
//     id : 100 ,
//     age : 24,
//     batchYear : 2026,
//     city : "Karachi",
//     campus : "Head office",
//     isActive : true,
//     email : undefined,
//     result : null
// }

// // for in
// for(var key  in stdObj ){
//     console.log( key ,stdObj[key])
// }




// stdObj.rollNumber = 1001
// stdObj.userName = "Jaffar Aman"

// var isCheck = "email" in stdObj


// console.log("isCheck" , isCheck)
// console.log(stdObj)


// data type
// string
// Number
// Boolean
// null
// undefined

// Array 
// object
// var STD = "Jaffar"

// var std = {
//     id : 100,
//     firstName : "Jaffar",
//     lastName : "Aman",
//     email : "jaffar@gmail.com",
//     courses : ["HTML" , "CSS" , "JAVASCRIPT"],
//     coursesMarks : {
//         html1 : 90,
//         css1 : 65,
//         javascript1 : 80
//     }

// }

// console.log(std.email)
// console.log(std.coursesMarks.javascript1)
// console.log(std.courses[1])


// var firstName = "sufiyan"

// var std = {
//     id : 100,
//     firstName : "Jaffar",
//     lastName : "Aman",
//     email : "jaffar@gmail.com",
//     courses : ["HTML" , "CSS" , "JAVASCRIPT"],
//     coursesMarks : {
//         html1 : 90,
//         css1 : 65,
//         javascript1 : 80
//     },
//     getFullName : function(num1){
//         console.log("num1" , num1)
//             return `${this.firstName} ${this.lastName}`
//     },
//     getTotalMarks : function(){
//         // console.log("this.html1" , this.coursesMarks.html1)
//         // console.log("this.html1" , this.coursesMarks.css1)
//         // console.log("this.html1" , this.coursesMarks.javascript1)
//             var totalMarks = this.coursesMarks.html1 + this.coursesMarks.css1 + this.coursesMarks.javascript1
//                 return totalMarks
//     }
// }

// var marks =  std.getTotalMarks()
// console.log(marks , "total marks")

// var fullName =  std.getFullName(100)
// console.log(fullName)






// var std1 = {
//     userName :"Jaffar Aman",
//     email : "jaffar@gmail.com"
// }

// var std2 = {
//     firstName: "muhammad",
//     lastName : "sufiyan",
//     email : "muhammad.sufiyan@gmail.com"
// }




// console.log(std2.userName)

// Constructors

function Std(name , age , gender){
        this.userName = name;
        this.age = age
        this.gender = gender
        this.getUserName = function(){
                return this.userName
        }
}

var std1  = new Std("Jaffar" , 25 , "male")
var std2  = new Std("muhammad sufiyan" , 35 , )

console.log(std1.getUserName())
console.log(std2)