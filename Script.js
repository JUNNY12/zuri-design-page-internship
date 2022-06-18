const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password= document.getElementById("password")
const errorMessage = document.getElementsByClassName("errorMessage")
const iconError = document.getElementsByClassName("iconError")
const emailError = document.querySelector(".errorEmail")

const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()


    Array.from(errorMessage).forEach((eachError, index) => {

        const eachIconError = iconError[index]       

        if(firstName.value === '' || lastName.value === '' || email.value === '' || password.value === ''){
            eachError.classList.add("showError")
            eachIconError.classList.add("showError")
            firstName.placeholder=""
            lastName.placeholder=""
            password.placeholder=""
            email.placeholder=""
            emailError.classList.add("showError")
        }
        else{
            eachError.classList.remove("showError")
            eachIconError.classList.remove("showError")
            emailError.classList.remove("showError")
            firstName.placeholder="First Name"
            lastName.placeholder="Last Name"
            password.placeholder="Password"
            email.placeholder="Email"
           
        }
    
    })

  

    // if(email.value === ''){
    //     emailError.style.display="block"
    // }

    form.reset()
})