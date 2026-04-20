import { db, doc, getDoc } from "./firebase.js"

console.log("dashboard")

const fetchuserData = async()=>{

        const uid  = localStorage.getItem("userUid")
    console.log(uid , "uid") 

    // fetch single user data
    const getUser = await getDoc(doc(db , "users" , uid ))
    console.log("getUser" , getUser.data())

}

window.fetchuserData = fetchuserData