function authenticate(){
    console.log("authenticate is called");
    let email=document.getElementById("email").value;
    let password=document.getElementById("password")
    validate(email,password);
}