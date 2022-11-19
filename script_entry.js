const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;
signUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
    body.classList.add('active');
});
signInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
    body.classList.remove('active');
});

const login = document.getElementById("login");
const password = document.getElementById("password");
const inBtn = document.getElementById("inBtn");
inBtn.onclick = function(){
    let login_data = login.value;
    if (login_data == "") alert ("Вы не ввели логин");
    else{
        let password_data = password.value;
        if (password_data == "") alert ("Вы не ввели пароль");
        else{
            alert("Выполняется вход");
        }
    }
}
const new_password = document.getElementById("new_password");
new_password.onclick = function(){
    alert("Выполняется переход на новую страницу для восстановления пароля");
}

const new_login = document.getElementById("new_login");
const new_mail = document.getElementById("new_mail");
const password_for_registration = document.getElementById("password_for_registration");
const passwrod_for_check = document.getElementById("password_for_check");
const upBtn = document.getElementById("upBtn");
upBtn.onclick = function(){
    let login_data = new_login.value;
    if (login_data == "") alert("Вы не ввели логин");
    else{
        let mail_data = new_mail.value;
        if (mail_data == "") alert("Вы не ввели почту");
        else{
            let password_data1 = password_for_registration.value;
            if (password_data1 == "") alert("Вы не ввели пароль");
            else{
                let password_data2 = passwrod_for_check.value;
                if (password_data2 == "") alert("Вы не подтвердили пароль");
                else{
                    if (password_data1 != password_data2){
                        password_for_registration.value = "";
                        passwrod_for_check.value = "";
                        alert("Пароли не совпадают");
                    }else{
                        alert("Вы зарегистрированы");
                    }
                }
            }
        }
    }
}