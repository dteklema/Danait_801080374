const expressModule = require('express')
const corsModule = require('cors');
const expressHandler = expressModule()
const bodyPareser = require('body-parser')
const axiosModule = require('axios')
const axios = axiosModule.default
//const sqlite3Handler = require('sqlite3').verbose();
console.log("Hello! I am an alert box!!");
var sqlite3 = require('sqlite3').verbose();

//var db = new sqlite3.Database('newDATABASE');

/*db.serialize(function(){
    db.run("CREATE TABLE myNewTable3 (id INT, dt TEXT)");
    var stmt = db.prepare("INSERT INTO myNewTable3 values(?,?)");
    for(var i = 0;i < 10; i++){
        var d = new Date();
        var n = d.toLocaleTimeString();
        stmt.run(i, n);
    }
    stmt.finalize();
    db.each("SELECT id, dt from myNewTable3", function(err, row)
    {
        console.log("Student id :"+row.id, row.dt);


        //set filds that will go to frontend
    });

});
db.close();*/

  //updating and generate the system_db and newDatabase

    let db = new sqlite3.Database('newDATABASE', (connectionError)=>{
        if (connectionError){
            console.log(connectionError.message)
        }
        else {
            console.log('connected to the database')

            db.serialize(function(){
                db.run("CREATE TABLE user17 (id INT,firstName TEXT, lastName TEXT)");
                var stmt = db.prepare("INSERT INTO user17 values(?,?)");

                stmt.run( firstName , lastName);

                stmt.finalize();
                db.each("SELECT id, firstName, lastName from user17", function(err, row)
                {
                    console.log(" Id :"+row.id, row.id);
                    //set filds that will go to frontend
                });

            });
            db.close();

        }
    });
    document.addEventListener('DOMContentLoaded',()=>{
        document.getElementById('btn').addEventListener('click', addPost)
    });

expressHandler.use(corsModule())
expressHandler.use(bodyPareser.urlencoded({extended: false}))
expressHandler.use(bodyPareser.json());


expressHandler.get('/post', function (requestObject, responseObject){
    dbHandler.all('SELECT * FROM users', (selectError, result)=>{
        resultObject = {'error': "", 'data': ""}
        if (selectError){
            resultObject.error = selectError
            resultObject.data = ""
        }
        else{
            resultObject.data = result
        }

    })
});

expressHandler.get('/post/:id', function (requestObject, responseObject){
    console.log('user id', requestObject.params.id)
    dbHandler.all('select * from users where userID = ?', [requestObject.params.id], (selectError, result)=>{
        resultObject = {'error': "", 'data': ""}
        if (selectError){
            resultObject.error = selectError
            resultObject.data = ""
        }
        else{
            resultObject.data = result
        }
    })
})

expressHandler.delete('/post/:id', function (requestObject, responseObject){
    console.log(requestObject.params.id)
    dbHandler.run('delete from users where userID = ?', [requestObject.params.id], (deleteError)=>{
        resultObject = {'error': "", 'data': ""}
        if (deleteError){
            resultObject.error = deleteError
            resultObject.data = ""
        }
        else{
            resultObject.data = 'Record has been deleted Successfully '
        }

    })
})


expressHandler.patch('/post/:id', function (requestObject, responseObject){
    console.log(requestObject.body)
    dbHandler.run('update users set userActive = ? where userID = ?',
        [requestObject.body.status, requestObject.body.id], (updateError)=>{
            resultObject = {'error': "", 'data': ""}
            if (updateError){
                resultObject.error = updateError
                resultObject.data = ""
            }
            else{
                resultObject.data = 'Record has been updated Successfully '
            }
        })
})


expressHandler.put('/post/:id', function (requestObject, responseObject){
    console.log(requestObject.body)
    dbHandler.run('update users set userFullName = ?, userEmail = ? where userID = ?',
        [
            requestObject.body.userFullName,
            requestObject.body.userEmail,
            requestObject.body.id
        ], (updateError)=>{
            resultObject = {'error': "", 'data': ""}
            if (updateError){
                resultObject.error = updateError
                resultObject.data = ""
            }
            else{
                resultObject.data = 'Record has been updated Successfully '
            }
        })
})

expressHandler.post('/post', function (requestObject, responseObject){
    console.log(requestObject.body)
    dbHandler.run('INSERT INTO users (userFullName, userEmail, userActive) VALUES (?,?,?)',
        [
            requestObject.body.userFullName,
            requestObject.body.userEmail,
            requestObject.body.userActive
        ],
        (insertError)=>{
            resultObject = {'error': "", 'data': ""}
            if (insertError){
                resultObject.error = insertError
                resultObject.data = ""
            }
            else{
                resultObject.data = 'Record has been inserted Successfully '
            }
        })
});
expressHandler.listen(5000)