const lgBtn = document.getElementById("login-btn");
const password = document.getElementById("password");
lgBtn.addEventListener('click', function () {
    //get number + get password + condition match + true / false hole ta return

    // get number 
    const mobileNumber = document.getElementById('mobileNumber');
    const contactNumber = mobileNumber.value;
    console.log(contactNumber);

    //password
    const password = document.getElementById("password");
    const getPassword = password.value;
    console.log(getPassword);

    //password and mobile number match
    if (contactNumber === "01234567890" && getPassword === "1234") {
        // condition true
        alert("login succeed");
        //window.location.replace("/home.html")
        window.location.assign("../home.html");
    } else {
        // condition false
        alert("login failed");
        return;
    }

})