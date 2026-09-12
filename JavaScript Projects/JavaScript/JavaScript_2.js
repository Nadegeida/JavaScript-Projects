function validateForm() {
    var name = document.forms["contactForm"]["fname"].value;
    var email = document.forms["contactForm"]["email"].value;
}   
if (name == "") {
        alert("First Name must be filled out");
        return false;
        if(email == "") {
            alert("Email must be filled out")
            return false;
        }
    alert("Form submitted successfully!");
    return true;
}