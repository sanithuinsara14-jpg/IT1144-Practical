// Function for register.html
function registerhere(event) {
    event.preventDefault(); // Stop page reload

    // Grab registration details
    let name = document.getElementById("reg-name").value;
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;

    // Show popup alerts
    alert("Registration Successfully !");
    alert("Welcome " + name + " to BookMe!");
}

// Function for signin.html
function signinhere(event) {
    event.preventDefault(); // Stop page reload

    // Grab sign-in details
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    // Print the submitted details directly onto the page
    document.getElementById("result").innerHTML = 
        "Email: " + email + "<br>" + 
        "Password: " + password;

    // Show popup alert
    alert("Sign In Successfully !");
}
function contacthere(event) {
    event.preventDefault(); // Stop page reload

    // Grab contact form details
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Show popup alerts
    alert("Message Sent Successfully !");
    alert("Thank you " + name + ", we will contact you at " + email + " soon.");
}