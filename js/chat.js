const bot1 = document.querySelector('.bot');
const box1 = document.querySelector('.box');
function talk(){
    var know ={
        "HI":"Hello",
        "HOW ARE YOU?":"Great !",
        "BYE":"Have A Nice Day !",
        "HELLO":"Hi , Whats Up",
        
    };
    var user = document.getElementById('userBox').value.toUpperCase();
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user];
    }else{
        document.getElementById('chatLog').innerHTML = `no response available. <br> send us a mail for further enquiries`;
    }
}

bot1.addEventListener('click', () => {
    box1.classList.toggle('chat-box')
})