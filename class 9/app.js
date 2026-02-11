// console.log("Hello world")



// 1 to 10
// for(var i = 1 ; i<=10 ; i++){
//     console.log(i)
// }



// 10 to 1
// i = 10
// i = 9
// // false
// for(var i = 10 ; i>=1;i--){
//     console.log(i)
// }



// %
// 10 % 2 = 0
// 4 % 2 => 0
// 10 % 3 = 1


// even odd
// 1 to 20
// odd number = > 1 , 3,5,7,9,11,13
// even num = > 2,4,6,8,10


// Odd number
// for(var i = 1 ; i<=20;i++){
//     // console.log(i)
//     if(i % 2 === 1){
//         console.log(i , "odd number")
//     }

// }



// Even number
// i % 2 == 0 == even

// for(var i =  1 ; i <=20 ;i++){
//         // console.log(i)
//         // even number
//         if(i % 2 === 0){
//             console.log(i , "even number")
//         }
// }

// alert("AZAN BREAK ")






// var cities = ["karachi" , "lahore" , "islamabad" , "multan"]
// console.log(cities[0])
// console.log(cities[1])
// console.log(cities[2])
// console.log(cities[3])

// for loop
// index  = 0 start sy hoga
// var cities = ["karachi" , "lahore" , "islamabad" , "multan" , "saylani" ,"pakistan" , "nepal" ]


// for(var  i = 0  ; i < cities.length ; i++ ){
//     console.log(cities[i])
// }


// for(var i = 0 ; i < cities.length ;i++){
//     console.log(cities[i])
// }


// for(var i = 0 ; i<=3;i++){
//     console.log(cities[i])
// }




// if(userCity === cities[0]){
//     console.log("welcome")
// }else if(userCity == cities[1]){
//     console.log("welcome")
// }else if(userCity == cities[2]){
//     console.log("welcome")
// }else if(userCity == cities[3]){
//     console.log("welcome")
// }
// var userCity = "karachi" //string
// var userCity = prompt("Enter your city") //lahore

// var cities = ["karachi" , "lahore" , "islamabad" , "multan"] //array

// for(var i = 0 ; i < cities.length ;i++){
//     console.log(cities[i])
//     if(userCity === cities[i]){
//         console.log("welcome")
//         break
//     }
// }


// for(var i  =1 ; i<=10; i++){
//     console.log(i)
//     if(i ==  5){
//         break
//     }
// }



// alert("NAMAZ BREAK")


// // break
// for(var  i = 1 ; i <= 5 ;i++){
//     if(i==3){
//         continue
//     }

//     console.log(i) 


// }




var userCity = prompt("enter city")
var cities = ["karachi" , "lahore" , "islamabad"];

// var isMatch  = "no"

var isMatch = false //true/false

for(var  i = 0 ; i<cities.length;i++){
    console.log(cities[i])

    if(cities[i] == userCity){
        alert("Welcome")
        isMatch = true
        break
    }

}

console.log(isMatch , "isMatch");

if(isMatch == false)
{
    alert("not found!")
}
// console.log(isMatch)

// if(isMatch == "no"){
//         alert("Not found")
// }


