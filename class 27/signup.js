import { auth, createUserWithEmailAndPassword } from "./firebase.js"

const signupHandler = async()=>{
        
    try {
          const email = document.getElementById("email")
        const password = document.getElementById("password")

        await createUserWithEmailAndPassword(auth , email.value ,password.value)
        console.log("successully signup")
    } catch (error) {
            console.log("error" , error.message)
    }
  

    }

window.signupHandler = signupHandler