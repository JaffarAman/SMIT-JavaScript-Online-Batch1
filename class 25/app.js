function signupHandler(){
 const  fullname = document.getElementById("fullname")
 const  email = document.getElementById("email")
 const  password = document.getElementById("password")

 if(!fullname.value || !email.value || !password.value  ){
    alert("required fields are missing")
    return
 }

    const userObj = {
        fullname : fullname.value,
        email : email.value,
        password : password.value,
    }



    var getUsers = localStorage.getItem("users")
    console.log(getUsers , "getUsers")


    // iska matlab yeh phela user hai 
    if(getUsers ==  null){
    localStorage.setItem("users" , JSON.stringify([userObj])  )

    fullname.value = ""
    email.value = ""
    password.value = ""

    alert("User Successfully Signup!")
    location.href = "./index.html"

    }else{
        const userExists = JSON.parse(getUsers)
        
        console.log("userExists" , userExists) 
        

        const findEmailAddress = userExists.find((obj)=>{
                console.log("obj" , obj.email)
                if(obj.email === userObj.email){
                        return true
                }
        })
console.log(findEmailAddress , "findEmailAddress") 
        
        if(findEmailAddress){
                alert("Email address already exists!")
                return
        }


        userExists.push(userObj)
        localStorage.setItem("users" , JSON.stringify(userExists))

    fullname.value = ""
    email.value = ""
    password.value = ""
    alert("User Successfully Signup!")
    location.href = "./index.html"

    }
    // console.log("userObj" , userObj)

    // const usersArr = [userObj]
    // localStorage.setItem("users" , JSON.stringify(usersArr)  )


}

// users = [ {} , {} , {}   ]


function loginHandler(){
const email = document.getElementById("email")
const password = document.getElementById("password")


if(!email.value || !password.value){
    alert("Required Fields are missing!")
    return
}

const getUsers = JSON.parse( localStorage.getItem("users"))
    console.log("getUsers" , getUsers)

    const findUser = getUsers.find((obj)=>{
            console.log("obj" , obj)
            if(obj.email === email.value){
                return true
            }
    })

    console.log("findUser" , findUser) 
    if(!findUser){
        alert("Invalid email address or password")
        return
    }

    if(findUser.password === password.value){
        alert("Login sucesfully!")
    }else{
        alert("INvalid email or password")
    }

}


console.log("HELLO WORLD")


// JAPAN
const arr = ["karachi" , "lahore"]





export default arr