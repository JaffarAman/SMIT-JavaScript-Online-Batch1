import { app, auth, createUserWithEmailAndPassword , db, doc, setDoc } from "./firebase.js"

console.log("Signup ", auth)


const signupHandler = async () => {
    try {
        console.log("signupHandler")
        const fullName = document.getElementById("fullName")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        const confirmPassword = document.getElementById("confirmPassword")

        if(!fullName.value || !email.value || !password.value){ 
                alert("Required fields are missing!")
                return 
        }

        if(password.value !== confirmPassword.value){
                alert("Password not match!")
                return
        }

        const userObj = {
            fullName : fullName.value,
            email : email.value,
            password : password.value,

        }

        // console.log("userObj" ,userObj)
        // STEP 1 => USER SIGNUP
       const signupUser =  await createUserWithEmailAndPassword(auth , userObj.email , userObj.password)
                console.log("signupUser" , signupUser.user.uid) 
        
        // #STEP 2 => SAVE USER DATA OB FIRESTORE DATABASE
        const userDoc =  doc(db , "users" , signupUser.user.uid )
        await setDoc(userDoc , {
            fullName : userObj.fullName,
            email : userObj.email,
        } )
        
        
        alert("user successfully signup")
        window.location.href = "./index.html"



    } catch (error) {
        alert(error.message)
    }
}


window.signupHandler = signupHandler