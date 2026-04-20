import { app, db, collection, addDoc, getDocs  , doc , updateDoc} from "./firebase.js"
console.log("db", db)

var parent = document.getElementById("parent")

async function addNote() {
    try {

        var noteInput = document.getElementById("noteInput")


        if (noteInput.value.length < 3) {
            alert("Invalid Note")
            return
        }



        const saveObj = {
            note: noteInput.value
        }
        console.log("saveObj", saveObj)

        // return



        // const notesCollection = collection(dbReference , collectionName)
        const notesCollection = collection(db, "todoNotes")


        // addDoc(collection , saveObj)
        await addDoc(notesCollection, saveObj)

        console.log("created!")




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


    } catch (error) {
        console.log("error", error.message)
    }

}


function deleteTodo(deleteBtn) {
    console.log("deleteTodo", deleteBtn.parentNode.parentNode)
    deleteBtn.parentNode.parentNode.remove()
}


async function editTodo(editBtn) {
    console.log("editTodo" , editBtn.id)
    var titleElement = editBtn.previousElementSibling //h5 element 
    
   var editValue = prompt("Enter your edit value", titleElement.innerHTML)
    console.log(editValue, "editValue")



    const noteDoc = doc(db , "todoNotes" , editBtn.id)
    await  updateDoc(noteDoc , {
        note : editValue
    })

    
    // console.log("titleElement", titleElement)

 
    titleElement.innerHTML = editValue

}

function deleteAll() {
    console.log("deleteAll()")
    parent.innerHTML = ""
}



const fetchNotes = async ()=>{
    try {
     
        const querySnapShot = await getDocs(collection(db  , "todoNotes"))
        
        
        // console.log("querySnapShot"  , querySnapShot)
        const tempArr = []
        querySnapShot.forEach((doc)=>{
                    // console.log("doc" , doc.data() , doc.id)
                    const obj = {
                        id : doc.id,
                        ...doc.data(),
                    }
                    tempArr.push(obj)
                    // console.log(obj , "obj")

        })

        // console.log("tempArr" , tempArr)


        // for(var i = 0 ; i < tempArr.length ;i++){
                // console.log(tempArr[i])
        // }

        for(const noteObj of tempArr ){
                console.log("noteObj" , noteObj)

                 var cardUI = ` <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${noteObj.note}  </h5>
                <button class="btn btn-info" id=${noteObj.id} onclick="editTodo(this)" >Edit</button>
                <button class="btn btn-danger" onclick="deleteTodo(this)" >Delete</button>
            </div>
        </div>
`

        // console.log(cardUI)

        parent.innerHTML += cardUI

        }




    } catch (error) {
        console.log("erorr" , error.message)
    }
}



window.addNote = addNote
window.fetchNotes = fetchNotes
window.editTodo = editTodo