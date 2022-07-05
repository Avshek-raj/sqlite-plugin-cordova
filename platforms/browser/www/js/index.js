
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
   
}

const newUser = document.querySelector('.newuser-btn');
const users = document.querySelector('.users-btn');

document.getElementById('newuser-div').addEventListener('click', ()=>{
    location.href = 'new User.html';
});

document.getElementById('user-div').addEventListener('click', ()=>{
    location.href = 'users.html';
});

newUser.addEventListener('click', ()=>{
    location.href = 'new User.html';
});

users.addEventListener('click', ()=>{
    location.href = 'users.html';
});