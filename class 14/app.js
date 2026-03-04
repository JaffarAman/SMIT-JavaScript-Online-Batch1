// function foo(){
//     console.log("Hello world")
// }

// // .value
// function getPara(){
//     var para = document.getElementById("para")
//     console.log("getPara()" , para.innerHTML)    
// }


// function setPara(){
//     var para = document.getElementById("para")
//     // input.value = "your value"
//     para.innerHTML = "Saylani"

// }


// // function changeImg(){
// //     var carImage = document.getElementById("carImage")
// //     console.log(carImage.src) 
// //     carImage.src = "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww"
// // }

// function changeOutImage(){
//     console.log("changeOutImage")
//     var carImage = document.getElementById("carImage")
//     carImage.src = "https://media.wired.com/photos/63b8d0a771c6b526845f15a6/master/pass/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
// }


// function inputFocus(elem){
//     // var input = document.getElementById("input")   
//     //     console.log("inputFocus" , input.placeholder)

//     // input.style.background = "red"

//     // 2nd way
//     console.log(elem.placeholder)
//     elem.style.backgroundColor = "green"

// }


// function inputBLur(){
//     var input = document.getElementById("input")   
//     console.log("inputBLur" , input)

// }


// function changeImage(imageEle , flag ){
//     console.log(imageEle , flag)

//     if(flag == "over"){
//         imageEle.src = "./car2.gif"
//     }else{
//         imageEle.src = "./car1.png"
//     }
// }



function inputFocus(ele){
    ele.style.backgroundColor = "lightgray"
}


function inputBlur(ele){
    console.log(ele.value.length)
    if(ele.value.length < 3){
    ele.style.backgroundColor = "red"

    }else{
        ele.style.backgroundColor = "green"
    }
}