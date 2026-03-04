function add(){
        // var num1 = +prompt("Enter your num1")
        // var num2 = +prompt("Enter your num2")
        // alert(num1 + num2)

        console.log("Hello world")
}


function containerMouseOver(){
        console.log("IN!")
}

function containerMouseOut(){
    console.log("OUT!")
}


// function changeImg(flag , carImage){

//     console.log("changeImg" , flag)
//     // var carImage = document.getElementById("carImage")
//     // console.log("change Img" , carImage)

//     if(flag == "in"){
//         carImage.src = "./car2.gif"

//     }else{
//         carImage.src = "./car1.png"
//     }
    
// }

function bigImg(ele){
    var  img  = document.getElementById("img")
    console.log(img)
    img.style.width = "500px"
    img.style.height = "400px"
    img.style.border = "1px solid black"
}

function smallImg(){
    var img = document.getElementById("img")
    img.style.width = "200px"
    img.style.height = "200px"
}


function getPara(){
    var para1 = document.getElementById("para1")
    console.log(para1.innerHTML)

}


var a = 10


a = 20

function setPara(){
    var para1 = document.getElementById("para1")
    para1.innerHTML = "Saylani welfare"

}

// Array

var paras = document.getElementsByTagName("h1")

for(var i   = 0 ; i<paras.length ;i++){
    console.log(paras[i])
    paras[i].style.color = "red"
    paras[i].style.background = "black"
}

// console.log(paras[0])
// console.log(paras[1])