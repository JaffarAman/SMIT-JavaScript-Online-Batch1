// console.log("Login")

import { auth, db, doc, getDoc, signInWithEmailAndPassword } from "./firebase.js"


const authCheck = ()=>{
    const uid = localStorage.getItem("userUid")
    console.log("authCheck" , uid)

    if(uid){
        location.replace("./dashboard.html")
    }


}


const loginHandler = async ()=>{
   try {
     console.log("loginHandler")

    const email = document.getElementById("email")
    const password = document.getElementById("password")    
    

    if(!email.value || !password.value){
        alert("required are missing")
        return
    }
        //  user login 
    const loginUser =  await signInWithEmailAndPassword(auth , email.value , password.value)
    // console.log("user login", loginUser.user.uid)
    const uid = loginUser.user.uid

    // save user uid on localstore
    localStorage.setItem("userUid" , uid)


    // fetch single user data
    // getDocs(collection)
    // const getUser = await getDoc(doc(db , "users" , uid ))
    // console.log("getUser" , getUser.data())


    location.replace("./dashboard.html")


   } catch (error) {
        console.log("error" , error.code)
        alert(error.code)
   }

}


window.loginHandler = loginHandler 
window.authCheck= authCheck