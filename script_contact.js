const name = document.getElementById("name");
const mail = document.getElementById("mail");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
btn.onclick = function(){
    name_data = name.value;
    if (name_data == "") alert ("Вы не ввели имя");
    else {
        mail_data = mail.value;
        if (mail_data == "") alert("Вы не ввели почту");
        else{
            text_data = text.value;
            if (text_data == "") alert("Вы ничего не написали");
            else alert("Сообщение отправлено");
        }
    }

}