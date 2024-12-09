var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
const validationMessage = document.getElementById("validate"); 

var signUpArray = [];

if (localStorage.getItem("signUpArray") != null) {
    signUpArray = JSON.parse(localStorage.getItem("signUpArray"));
}

function signIn(){
    let email = signinEmail.value;
    let password = signinPassword.value;

    if (email === "" ||
        password === "") {  
        validationMessage.innerHTML = '<span class="text-danger m-3">All inputs are required!</span>';  
        return false;  
    }

    if (isCorrectEmailAndPassword(email , password)){
        window.location.href = 'home.html'; 
    } else{
        validationMessage.innerHTML = '<span class="text-danger m-3">Wrong Email or Password</span>';
    }
}

loginButton.addEventListener("click", function () {
    signIn();
});

function isCorrectEmailAndPassword(email, password) {
    for (let i = 0; i < signUpArray.length; i++) {
      if (signUpArray[i].email === email && signUpArray[i].password === password) {
        localStorage.setItem("userName", signUpArray[i].name);
        return true;
      }
    }
    return false;
  }

document.getElementById('signup-link').addEventListener('click', function(event) {  
    event.preventDefault();  
    window.open('signup.html', '_blank');  
});  
