import { db, doc, getDoc ,addDoc  ,collection, getDocs, query, where } from "./firebase.js"

console.log("dashboard")

const fetchuserData = async()=>{

        const uid  = localStorage.getItem("userUid")
    console.log(uid , "uid") 


    if(uid === null){
        location.replace("/index.html")
    }

    // fetch single user data
    const getUser = await getDoc(doc(db , "users" , uid ))
    console.log("getUser" , getUser.data())

}

const parent = document.getElementById("parent")
const  fetchAllPost = async ()=>{
    try {
        const uid = localStorage.getItem("userUid")
        const q = query(collection(db , "post") , where("is_public" , "==" , true))

        const snapshots = await getDocs(q)
        const tempArr = []
        snapshots.forEach((doc)=>{
            // console.log(doc.data())
            const obj = {
                ...doc.data(),
                id : doc.id
            }
            tempArr.push(obj)
        })

        for(let obj of tempArr){
            console.log("loop obj" , obj)
            parent.innerHTML += `  <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title"> ${obj.title} </h5>
    <p class="card-text"> ${obj.desc} </p>
            ${uid === obj.userId ? `<button class="btn btn-info" >Edit</button>` :  "" }
    </div>
</div>`
        }
        



    } catch (error) {
            alert(error.message)
    }    
}



const createPost = async ()=>{
    try {
        const title = document.getElementById("title")
const description = document.getElementById("description")
    const is_public = document.getElementById("is_public")
    // console.log(title.value)
    // console.log(description.value)
    // console.log("is_public" , is_public.checked)

    const postObj = {
        title : title.value,
        desc : description.value,
        is_public : is_public.checked,
        imageUrl : "",
        userId : localStorage.getItem("userUid")
    }
console.log("postObj" , postObj)

    await addDoc(collection(db , "post") , postObj)
    alert("Post created!!")
const myModalEl = document.getElementById('exampleModal');
const modal = bootstrap.Modal.getInstance(myModalEl); 
modal.hide();

    } catch (error) {
            alert(error.message)
    }

}

window.fetchuserData = fetchuserData
window.createPost = createPost
window.fetchAllPost = fetchAllPost



// if  => true
// else => false
// ?
// :


// let userAge = 28

// const isCheck = userAge === 18 ? "age 18 hai" : "age 18 nahi hai"
// console.log("isCheck" , isCheck)



