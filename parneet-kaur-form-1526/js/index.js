let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// event-target object
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");
let fullname = document.getElementById("full-name");
let message = document.getElementById("message");

// Clear the data from HTML form
let testForm = document.querySelector("form");

// event-handler
function validateForm() {
    
    console.clear();
    
    // save data and errors in these intitially empty "buckets":
    let errors = [];
    let data = {};
    
    // VALIDATE FULL NAME
    if (fullname.value === ""){
        errors.push("Please enter your full name");
        console.log();
    } else {
        data.fullnameProp = fullName.value;
    }
    
    // VALIDATING EMAIL
    if (email.value === "") {
        errors.push("Please enter your email!");
        console.log();
    } else {
        
        if(pattern.test(email.value)) {
            data.emailProp = email.value;
        
    } else {
        errors.push("Your email is not correct");
    }
    }
    
    
    // test printings
    //console.log("Errors", errors);
    //console.log("Data Object", data);
    
    // create the feedback
    
    if (message.value === "") {
        errors.push("Message is missing");
        console.log();
    } else {
        data.messages= message.value;
    }
    
    
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(data);
    } else {
        console.log(errors);
    } 
}

// registering event
btn.addEventListener("click", validateForm);
call button
