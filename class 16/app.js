// DOM
// document
// object
// model

// document.getElementById

// console.log(document.childNodes[1].childNodes[2].childNodes[1])
// var h1 = document.childNodes[1].childNodes[2].childNodes[1]
// h1.style.color = "red"

// console.log(document.childNodes[1].childNodes[2].childNodes)
// console.log(document.children[0].children[1].children)


// console.log(document.children[0].children[1].children[0].children)

var pappa = document.getElementById("pappa")
// console
// console.log(pappa.lastElementChild).log(pappa.firstElementChild)
// console.log(pappa.lastElementChild)

// var firstchild = pappa.firstElementChild
// console.log(firstchild.nextElementSibling.nextElementSibling)

// var lastchild = pappa.lastElementChild
// // console.log("lastchild" , lastchild.previousElementSibling.previousElementSibling.previousElementSibling)


// console.log("lastchild" , lastchild.parentNode)

// var heading = document.getElementById("heading")
// console.log(heading.nodeType)
// console.log(heading.nodeName)


// var pappa = document.getElementById("pappa")
// console.log(pappa.children.length)


// function checkAttr(){
//     var inputElement = document.getElementById("input")
//     var isCheck = inputElement.hasAttribute("placeholder")

//     console.log(inputElement.getAttribute("type"))

//     if(isCheck){
//                 console.log("placeholder exist krta ha")
//                 console.log(inputElement.getAttribute("placeholder"))
//     }else{
//                 console.log("placeholder exist nhi krta ")
//         inputElement.setAttribute("placeholder" , "Enter username")

//     }

// }


var parent = document.getElementById("parent")
var h1Ele = document.createElement("h1")

// var h1Text = document.createTextNode("Jaffar Aman")

// h1Ele.appendChild(h1Text)



// console.log(h1Text)
console.log(h1Ele) 
h1Ele.innerHTML = "Jaffar Aman"
parent.appendChild(h1Ele)