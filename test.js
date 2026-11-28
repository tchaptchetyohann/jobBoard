
const form = document.getElementById("accountForm");

const registerFields = document.getElementById("registerFields");
const loginFields = document.getElementById("loginFields");

const formTitle = document.getElementById("formTitle");
const formDescription = document.getElementById("formDescription");
const submitButton = document.getElementById("submitButton");
const switchButton = document.getElementById("switchButton");
const switchText = document.getElementById("switchText");
const result = document.getElementById("result");
let role = document.getElementById("role");
let companyField = document.getElementById("companyField");


let isRegistering = true;

role.addEventListener("click", (e) => {
    if(role.value==="Employer"){
        companyField.hidden=false;
    }
    else{
        companyField.hidden=true;
    }
})
// Switch between Register and Login
switchButton.addEventListener("click", () => {

    isRegistering = !isRegistering;

    registerFields.hidden = !isRegistering;
    loginFields.hidden = isRegistering;

    formTitle.textContent = isRegistering ? "Create an Account" : "Welcome Back";

    formDescription.textContent = isRegistering
        ? "Join our platform and find your next opportunity."
        : "Login to access your account.";

    submitButton.textContent = isRegistering ? "Create Account" : "Login";

    switchText.firstChild.textContent = isRegistering ? "Already have an account? " : "Don't have an account? ";

    switchButton.textContent = isRegistering ? "Login" : "Register";

    result.textContent = "";
});

// Form submission
form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (isRegistering) {

        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;
        const password = document.getElementById("password").value;

        console.log({ fullname, email, role, password });

        result.textContent = "Account registration submitted!";

        isRegistering=false;

        registerFields.hidden = !isRegistering;
        loginFields.hidden = isRegistering;

        formTitle.textContent = isRegistering ? "Create an Account" : "Welcome Back";

        formDescription.textContent = isRegistering
            ? "Join our platform and find your next opportunity."
            : "Login to access your account.";

        submitButton.textContent = isRegistering ? "Create Account" : "Login";

        switchText.firstChild.textContent = isRegistering ? "Already have an account? " : "Don't have an account? ";

        switchButton.textContent = isRegistering ? "Login" : "Register";

        result.textContent = "";





    } else {

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("password").value;

        console.log({ email, password });

        result.textContent = "Login submitted!";
        window.location.href="index.html";
    }

});
