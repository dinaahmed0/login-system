let logoutButton = document.getElementById("logoutButton")
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");


welcomeUser.innerHTML = "Welcome " + userName + "!";

logoutButton.addEventListener("click", function () {
    window.location.href = "index.html";
});