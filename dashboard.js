function custLogin() {

    let userList = document.getElementById('usertype');
    let userName = document.getElementById('login-username');
    let userPassword = document.getElementById('login-password');

    if(userName.value == "" || userPassword.value == "" || userList.value == ""){
        // base_pages_login.js - validation code
    }else {
        if (userList.value == "Global Admin") {
             window.open('GlobalAdmin/GlobAdmin.html',"_self");
         } else if (userList.value == "Registered Admin") {
             window.open("OrgAdmin/OrgAdmin.html","_self");
         } else {
             window.open("Professor/Professor.html","_self");
         }
    }
}




