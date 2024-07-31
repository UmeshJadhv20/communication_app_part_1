document.addEventListener("DOMContentLoaded", function (event) {    

    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
    if (loggedUser) {
        if (document.getElementById("welcome-message")) {
            document.getElementById("welcome-message").innerHTML = loggedUser.email;
        }

        let logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                localStorage.removeItem("loggedUser");
                location.href = "./welcome.html";
                logoutBtn.innerHTML = "Logout";
            });

        }
    } else {
        let logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            document.getElementById("logout-btn").innerHTML = "Login";
            document.getElementById("logout-btn").addEventListener("click", function () {
                location.href = "./login.html";
            })
        }

    }

});

const validateEmail = (email) => {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

const allowLoggedInUserAccess = () => {
    var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
        location.href = "./welcome.html";
    }
}

