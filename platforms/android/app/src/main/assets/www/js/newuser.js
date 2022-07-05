document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){
var  listId = sessionStorage.getItem('user-desc');
const actionbtn = document.getElementById('submit-btn');
actionbtn.addEventListener('click', ()=>{
    if(listId){
        updateUser(listId)
    } else{
        saveUser();
    }
});
    if(listId){
        actionbtn.innerText = 'Update';
        document.querySelector('#page-head').innerText = 'Update User';
        showUser(listId);
    } 

    document.addEventListener('backbutton', (e)=>{
        e.preventDefault();
        location.href = 'index.html';
    });
}


function showUser(listId){
    var db = window.sqlitePlugin.openDatabase({name: 'users.db', location: 'default'}, (db)=>{
        db.transaction((tx)=>{
                tx.executeSql(`SELECT * FROM hello WHERE id = ${listId} `, [], (tx, resultSet)=>{
                    for(i=0;i< resultSet.rows.length;i++){
                        document.getElementById('first-name').value = resultSet.rows.item(i).firstname;
                        document.getElementById('last-name').value = resultSet.rows.item(i).lastname;
                        document.getElementById('email').value = resultSet.rows.item(i).email;
                        document.getElementById('address').value = resultSet.rows.item(i).address;
                        document.getElementById('contact').value = resultSet.rows.item(i).contact;
                    }
                    
                }, (error)=>{
                    console.log(error);
                });
        }, function error(error){
            console.log('Error: ' + error);
        }, ()=>{
            console.log('Transaction successful');
        })
    })
}

function updateUser(listId){
    var db = window.sqlitePlugin.openDatabase({name: 'users.db', location: 'default'}, (db)=>{
        db.transaction((tx)=>{
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const contact = document.getElementById('contact').value;
            tx.executeSql(`UPDATE hello SET firstname = '${firstName}', lastname = '${lastName}', email = '${email}', address = '${address}', contact ='${contact}' WHERE id = ${listId}`);
            sessionStorage.removeItem('user-desc');
            location.href = 'users.html';

        }, (error)=>{
            console.log('ERROR: ' + error);
        }, ()=>{
            console.log('UPDATE SUCCESS');
        });
    }, ()=>{
        console.log('Succesfully opened database');
    }, (error)=>{
        console.log('ERROR: ' + error);
    });
}


function saveUser(){
    var db = window.sqlitePlugin.openDatabase({name: 'users.db', location: 'default'}, function(db){
        db.transaction(function (tx){
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const contact = document.getElementById('contact').value;
            tx.executeSql('CREATE TABLE IF NOT EXISTS hello(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname, lastname, email, address, contact)');
            tx.executeSql(`INSERT INTO hello (firstname, lastname, email, address, contact) VALUES ('${firstName}', '${lastName}','${email}','${address}', '${contact}')`);

            location.href = 'users.html';
        },function error(error){
            console.log(error);
        });
    }, function error(error){
        console.log(error);
    });
}




