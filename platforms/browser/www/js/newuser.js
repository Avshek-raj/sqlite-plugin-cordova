

const submit = document.getElementById('submit-btn');
submit.addEventListener('click', saveUser);

function saveUser(){
    var db = window.sqlitePlugin.openDatabase({name: 'users.db', location: 'default'}, function(db){
        db.transaction(function (tx){
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const contact = document.getElementById('contact').value;
            tx.executeSql('CREATE TABLE IF NOT EXISTS hello(firstname, lastname, email, address, contact)');
            tx.executeSql(`INSERT INTO hello (firstname, lastname, email, address, contact) VALUES ('${firstName}', '${lastName}','${email}','${address}', '${contact}')`);
            location.href = 'users.html';
        },function error(error){
            console.log(error);
        });
    }, function error(error){
        console.log(error);
    });
}


