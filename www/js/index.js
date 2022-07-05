
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    sessionStorage.removeItem('user-desc');
    // var db = window.sqlitePlugin.openDatabase({name: 'users.db', location: 'default'}, function(db){
    //     db.transaction((tx)=>{
    //         tx.executeSql('DROP TABLE hello', [], ()=>{
    //             alert('Table is emptied');
    //         }, (error)=>{
    //             alert(error);
    //         });
    //     });
    // })
}

const newUser = document.querySelector('.newuser-btn');
const users = document.querySelector('.users-btn');

document.getElementById('newuser-div').addEventListener('click', ()=>{
    location.href = 'newUser.html';
});

document.getElementById('user-div').addEventListener('click', ()=>{
    location.href = 'users.html';
});

newUser.addEventListener('click', ()=>{
    location.href = 'newUser.html';
});

users.addEventListener('click', ()=>{
    location.href = 'users.html';
});

