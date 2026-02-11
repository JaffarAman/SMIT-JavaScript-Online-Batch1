// alert("Hello World!")



// intializing a variable
// var firstName = "Jaffar";  //data type - string


// firstName = "Aman"; 



// var firstName; //declaration

// console.log(firstName)

// var a = 10

// var b;



// condition - true / false

// Data types
// 1. string   -  group of characters - "Jaffar" , "Aman" , "Hello" , "12345"
// 2. number   - numeric values  -  10 , 20 , 3.14 , -5
// 3. boolean  - true , false
// 4. undefined - a variable which is declared but not assigned any value
// 5. null - represents the intentional absence of any object value


// var userIsActive = true; // boolean


// if(userIsActive == true){
//     console.log("User is active")
// }else{
//     console.log("User is not active")
// }


// var rollNumber;
// rollNumber = 101; // assignment


// var userName = "Jaffar Aman";
// var userAge = 24;
// var userEmail = null; 



// Arrays




// var userName1 = "Jaffar"; //string data type
// var userName2 = "Aman"
// var userName3 = "sufiyan"
// var userName4 = "Bilal"
// var userName5 = "Ali"




// console.log(userName3)



// user
// cities
// countries
// fruits
// bikes
// cars


// developer 1

// var userName = "Jaffar"



// // Dev 2

// var user1 = "Aman"


// Array - collection of data

// [] -- array bracket

// var stds = ["Jaffar" , "Aman" , "Sufiyan"] 
// console.log(stds)


// Collection of Data

// var cities = ["karachi" , "lahore" , "multan" , "Islamabad"];
// var stdData = ["Jaffar" , 24 , "male" , "karachi" , 3462528569 , true , null , undefined] 
// console.log(cities)

// []




// // index number    0              1         2           3       4
// var cities =    ["Karachi" , "lahore" , "multan" , "jaffar" , "sufiyan",]
// // length =        1              2         3           4           5
// console.log("cities" , cities.length)


// index number start hoga hamesha zero "0"
// length = > number of values array = >start 1
// index number = length  -1  = 3 - 1 = 2

// console.log(arrayName[indexNumber])
// console.log(cities)
// console.log(cities[17])
// console.log(cities[2])
// console.log(cities[4])



// var arr = [] //empty array  -  true value


// if(arr){
//     console.log("True condition")
// }else{
//     console.log("false condition")
// }


// console.log(arr)

// var a;
// a  = 10

// console.log(a)


// var arr = [] //empty array

// arr[0] = "jaffar"
// arr[1] = "Aman"
// arr[3] = "Sufiyan"

// console.log(arr)






// Array methods
// pop => remove
// push= > add krta
// pop , push ==> last index number
// shift or unshift ==> first undex



// var cities = ["karachi" , "lahore" , "multan" , "islamabad"];

// cities.pop() //last index value ko remove krta hai
// cities.pop() //last index value ko remove krta hai

// cities.push("Hyderabad" , "Punjab") //last index pr value add krta hai 


// cities.shift() // first index sy value remove karega
// cities.shift() // first index sy value remove karega

// cities.unshift("hyderabad") //first index value ko add krta hai 


// console.log(cities)


// alert("Namaz break;")

// Array methods
// pop
// push
// shift
// unshift
// slice
// splice


// SLICE - COPY 
// slice = array ki copy krta hai or NEW ARRAY RETURN karega

// slice(starting point , ending point)
// slice(index number , length)
// slice(1  ,  3)

// var cities = ["karachi" , "lahore" , "multan" , "islamabad"];

// var arrCopy = cities.slice(1 ,  3)
// console.log(arrCopy , "arrCopy")
// console.log(cities , "cities")

// console.log(cities)


// var cities = ["karachi" , "lahore" , "multan" , "islamabad" , "Hyderabad" ];

// var arrCopy = cities.slice(3)
// var arrCopy = cities.slice(0 , -2)
// var arrCopy = cities.slice(-2)

// console.log(arrCopy)

// splice - array main kisi b index pr value add /  remove krni hai splice

// splice(starting point , delete count)
// splice(index , delete count)

// var cities = ["karachi" , "lahore" , "multan" , "islamabad" , "Hyderabad" ];
// // cities.splice(2 , 0 , "Jaffar" , "Aman")

// cities.splice(2 , 1 , "Jaffar")
// console.log(cities)


