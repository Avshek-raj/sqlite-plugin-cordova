document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){
    showUser();

    function showUser(){
        var db = window.sqlitePlugin.openDatabase({name: 'users.db', location: 'default'}, function(db){
            db.transaction(function (tx){
                var query = 'SELECT * FROM hello';
                tx.executeSql(query, [], function (tx, resultSet){
                    const list = document.getElementById('users-div');
                    for(var x = 0; x < resultSet.rows.length; x++){
                        list.innerHTML += `<li class="user">${resultSet.rows.item(x).firstname}  ${resultSet.rows.item(x).lastname}</li>`;
                    }
                    document.querySelectorAll('.user').forEach((u, idx)=>{
                        u.addEventListener('click', ()=>{
                            var userId = resultSet.rows.item(idx).id;
                            sessionStorage.setItem('user-desc', userId);
                            location.href = 'newUser.html';
                    });
                    });
                   
                }, function(error){
                    console.log('trasaction error: '+ error);
                });
            });
        }, function(error){
            console.log(error);
        });
    }
    document.addEventListener('backbutton', (e)=>{
        e.preventDefault();
        location.href = 'index.html';
    });
}
