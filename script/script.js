const sectionTwo = document.getElementById("secTwo");
const email = document.getElementById("inputEmail");
const button = document.getElementById("inputButton").addEventListener("click", validateButton);
const output = document.getElementById("outputEmail");

const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/




      
function validateButton(){
    if (regexEmail.test(email.value)) {
        email.style.border = "1px solid hsl(223, 87%, 63%)";
        output.style.display = "unset"
        output.style.color = "hsl(223, 87%, 63%)";
        output.innerText = "Done!";
    }
    else{
        email.style.border = "1px solid hsl(354, 100%, 66%)";
        output.style.display = "unset"
        output.style.color = "hsl(354, 100%, 66%)";
        output.innerText = "Please provide a valid email adress";
    }   
}

// Email has been sent
// Please provide a valid email adress