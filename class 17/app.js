// var firstName = `Jaffar `
// var lastName = "Aman"

// var fullName = `${firstName}  ${lastName}`
// // var fullName = firstName + " " +lastName

// console.log(fullName)

// var num1 = 100
// // console.log("hamary pass num1 ki value: num1 ")


// console.log(`hamary pass num1 ki value: ${num1}`)


var parent = document.getElementById("parent")

function addNote() {
    var noteInput = document.getElementById("noteInput")

    if (noteInput.value.length < 3) {
        alert("Invalid Note")
        return
    }

    // console.log("noteInput" , noteInput.value)

    var cardUI = ` <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${noteInput.value}  </h5>
                <button class="btn btn-info"  onclick="editTodo(this)" >Edit</button>
                <button class="btn btn-danger" onclick="deleteTodo(this)" >Delete</button>
            </div>
        </div>
`

    console.log(cardUI)

    parent.innerHTML += cardUI

    noteInput.value = ""

}


function deleteTodo(deleteBtn){
    console.log("deleteTodo" , deleteBtn.parentNode.parentNode)
    deleteBtn.parentNode.parentNode.remove()
}


function editTodo(editBtn){
    // console.log("editTodo()" , editBtn.previousElementSibling)
    var titleElement = editBtn.previousElementSibling //h5 element 
    console.log("titleElement" , titleElement)

    var editValue = prompt("Enter your edit value" , titleElement.innerHTML)
    console.log(editValue , "editValue")

    titleElement.innerHTML = editValue 

}

function deleteAll(){
    console.log("deleteAll()")
    parent.innerHTML = ""
}