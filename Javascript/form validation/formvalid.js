document.addEventListener("DOMContentLoaded", function () {
    let inputdate = document.querySelector(".enterdate");  // Correct selector
    inputdate.max = new Date().toISOString().split("T")[0]; // Blocks future dates
});

function checkall(){
    
    let a = 1;
    let msg = document.querySelector(".entermsg");
    let fullname = document.querySelector(".entername");
    let email = document.querySelector(".enteremail");
    let no = document.querySelector(".enterno");

    // For showing errors, we need to access the parent of the input and then find the .error span inside it
    if(fullname.value.length === 0){
        alert("Enter a valid name");
        const errorSpan = fullname.parentElement.querySelector('.error');  // Fixed - parentElement used
        errorSpan.style.display = 'block';
        a=0;
    } else {
        const errorSpan = fullname.parentElement.querySelector('.error');
        errorSpan.style.display = 'none'; // Hide if no error
    }

    if(!email.value.includes("@")){
        alert("Enter a valid email");
        const errorSpan = email.parentElement.querySelector('.error');  // Fixed - parentElement used
        errorSpan.style.display = 'block';
        a=0;
    } else {
        const errorSpan = email.parentElement.querySelector('.error');
        errorSpan.style.display = 'none'; // Hide if no error
    }

    if(no.value.length !== 10 || isNaN(no.value)){
        alert("Enter a valid 10 digit phone no");
        const errorSpan = no.parentElement.querySelector('.error');  // Fixed - parentElement used
        errorSpan.style.display = 'block';
        a=0;
    } else {
        const errorSpan = no.parentElement.querySelector('.error');
        errorSpan.style.display = 'none'; // Hide if no error
    }

    if(a===0){
        return false;
    }
    
    alert("Form submitted successfully!");
    fullname.value = "";
    email.value = "";
    no.value = "";
    msg.value = "";
    a = 1;
    return true;
}
