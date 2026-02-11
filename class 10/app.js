// console.log("Hello world")


// var userCity = prompt("Enter your city").toUpperCase() //lahore
//     console.log("userCity" , userCity)
// var cities = ["lahore" , "multan" , "KARACHI" , "islamabad"];

// var flag = false

// for(var  i = 0 ; i<cities.length;i++ ){
//     console.log(cities[i])
//     if(userCity === cities[i]){
//             alert("Welcome")
//             flag  = true
//             break
//     }

// }

// if(flag == false){
//     alert("Not found!")
// }



// data type
// Array - collection of data

// var str = "pakistan" //string data type
// var str = "Jaffar                       Aman" //string data type
// // console.log(str[1])
// console.log(str.length)
// // console.log(str[0])

// var str = "PakIstaN"
// // console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// saylani -- lower
// SAYLANI - upper
// Saylani - capitalize


// var str = "ali"; //Saylani
// var firstPart = str[0].toUpperCase()
// var secondPart = str.slice(1).toLowerCase()
// var final = firstPart + secondPart
// console.log("final" , final)
// console.log(firstPart)
// console.log(secondPart)



// var str = "jaffar"
// var capWord = str[0].toUpperCase() + str.slice(1).toLowerCase()
// console.log(capWord)




// var str = 'Jaffar "Aman"';
// console.log(str)

// index 0
// length 1
var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."




// for(var i = 0 ; i<str.length ;i++){
//     if(str.slice(i , i+12) === "World War II"){
//         // console.log(i)
//         var firstpart = str.slice(0 , i)
//         var secondPart = str.slice(i + 12)
//         // console.log(firstpart)
//         // console.log(secondPart)

//         var final  = firstpart +  "the second world war" +secondPart
//         console.log(final)
    
//     }

//     }

// alert("NAMAZ BREAK!")

// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."

// var indexNum = str.indexOf("World War II")
// // + "the second world war"
// // console.log(str[indexNum + 12])



// var firstPart = str.slice(0 , indexNum)
// var secondPart = str.slice(indexNum + 12)
// console.log(firstPart)
// console.log(secondPart)

// var final  = firstPart + "the second world war" + secondPart
// console.log(final)







// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."

// var replacePara =  str.replace("World War II" , "The Second World War")

// console.log(replacePara)



// var str = "Jaffar Aman"
// // var indexNumber = str.indexOf("a")
// var indexNumber = str.indexOf("k")

// console.log(indexNumber)

// it => IT
// var str = "saylani mass it training it it"
// var changeStr = str.replaceAll("it" , "IT")
// console.log(str)
// console.log(changeStr)

var str = "saylani"
console.log(str[5])
console.log(str.charAt(5))



