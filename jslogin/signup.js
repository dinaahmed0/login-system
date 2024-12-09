var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
const validationMessage = document.getElementById("validate"); 

var signUpArray = [];

if (localStorage.getItem("signUpArray") != null) {
    signUpArray = JSON.parse(localStorage.getItem("signUpArray"));
}


function signUp() {  

    let user = {  
        name: signupName.value,  
        email: signupEmail.value,  
        password: signupPassword.value 
    }; 

    if (signupName.value === "" ||
        signupEmail.value === "" ||
        signupPassword.value === "") {  
        validationMessage.innerHTML = '<span class="text-danger m-3">All inputs are required!</span>';  
        return false;  
    }  

    if (
        isValidEmail(signupEmail.value) &&
        isNewEmail(signupEmail.value)
      ) {
        signUpArray.push(user);
        localStorage.setItem("signUpArray", JSON.stringify(signUpArray));
        clearForm();
        console.log(signUpArray);
        validationMessage.innerHTML = '<span class="text-success m-3">Sign up successful!</span>';  ;
      } else {
        validationMessage.innerHTML = '<span class="text-danger m-3">Email is already registered!</span>'; ;
      }
}

signupButton.addEventListener("click", function () {
    signUp();
});

function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isNewEmail(email) {
    for (let i = 0; i < signUpArray.length; i++) {
      if (signUpArray[i].email === email) {
        return false;
      }
    }
    return true;
}

function clearForm() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}



document.getElementById('signin-link').addEventListener('click', function(event) {  
    event.preventDefault();  
    window.location.href = 'index.html';   
}); 



