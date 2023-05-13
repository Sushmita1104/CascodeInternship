let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let submitError = document.getElementById("submit-error");


function validateName(){
    let name = document.getElementById("signup-input-name").value;

    if(name.length == 0){
        nameError.innerHTML = "name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write Full Name";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validatePhone(){
    let phone =document.getElementById("signup-input-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone No is required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML="Phone No should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Phone No is required";
        return false;
    }

    phoneError.innerHTML="";
    return true;

}

function validateEmail(){
    let email = document.getElementById("signup-input-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Email Invalid";
        return false;
    }

    emailError.innerHTML="";
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone()){
        submitError.innerHTML = "please fix error to submit";
        return false;
    }
}