function  register() {

    let userList = document.getElementById('userType');
    let userName = document.getElementById('register-username');
    let userPassword = document.getElementById('register-password');
    let userEmail = document.getElementById('register-email');
    let userPassword2 = document.getElementById('register-password2');
    let userTerms = document.getElementById('register-terms');

    if(userName.value == "" || userPassword.value == "" || userList.value == "" || userEmail.value == "" || userPassword2.value == ""){
        // base_pages_login.js - validation code

    }else {
        window.open('dashboard.html',"_self");
    }
}
