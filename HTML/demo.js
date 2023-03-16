function checkemail () {
    const email = document.getElementById("email");
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = document.getElementById("validation");
    if(emailReg.test(email.value)){
        valid.innerHTML = "This is a valid log in!";
        console.log("This is valid");
    } else{
        valid.innerHTML = "This is not a valid log in!";
        console.log("This is not valid");
    }
    event.preventDefault();
}