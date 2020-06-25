//changing background switcher with different images
function changeBackground(id) {
    var btnValue = document.getElementById(id).value;
    var body = document.getElementsByClassName("style")[0];

    if (id === "image1") {
        body.style.backgroundImage = "url(image-1.jpg)";
    } else if (id === "image2") {
        body.style.backgroundImage = "url(image-2.jpg)";
    } else {
        body.style.backgroundImage = "url(image-3.jpg)";
    }
}

/* setting up for the resizer button*/
function fontResizer(){
    document.getElementById("Heading").style.fontSize= "45px";
}

//global variables
var parts = ['blog1', 'blog2', 'blog3', 'blog4'];
var chose = 0;
var dur;

//stop slides for blogs on Index HTML
function stopSlides() {
    clearInterval(dur)
}

//play slides for blogs on Index HTML
function playSlides() {
    //setInterval takes in two parameters, the function and timer
    dur = setInterval(()=> {
        //setting current selected blog to show
        document.getElementById(parts[chose]).style.display = "block";
        switch (chose) {
            case 0:
                document.getElementById(parts[1]).style.display = "none";
                document.getElementById(parts[2]).style.display = "none";
                chose = 1
                break;
            case 1:
                document.getElementById(parts[0]).style.display = "none";
                document.getElementById(parts[2]).style.display = "none";
                chose = 2
                break;
            case 2:
                document.getElementById(parts[0]).style.display = "none";
                document.getElementById(parts[1]).style.display = "none";
                chose = 0
                break;
            default:
                break;
        }
    }, 5000);
}
/*// trial
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database(':myblog:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});*/

// Milestone#5
// Connecting to the databaser server
//     const mySqlHandler = required('MySqlWorkbench').verbose();
//
//         let dbHandler = new mySqlHandler.Database('OUTPATIENTCLINIC', (connectionError)=> {
//             if (connectionError) {
//                 console.log(connectionError.message)
//             } else {
//                 console.log('Connected to the database')
//             }
//         });
//
//         //Fetching data from database
//     dbHandler.all('select * from PROVIDERS where user PROVIDERS_PROFESSION =? ', [requestObject.parms.id], (selectError, result)=>{
//                 if (selectError){
//             //error rendering page with error
//                 }else{
//             //return render page with the return data
//
//
//             //the returned rows will be in the result
//                 }
//             })
//
//         //Inserting data
//     dbHandler.run('insert from the providers when DEPARTMENTS_ID = ? ', [requestObject.parms.id], (deleteError)=>{
//             if (deleteError){
//                 //return rendered page with error
//             }else{
//                 //return render page with the success message
//             }
//         })
//         let statment = db.prepare('insert from provider where DEPARTMENTS_ID = ?');
//         statment.run(requestObject.parms.id);
//         statment.finalize();
//         // Selecting the database to work with
//         // Writing query
//         // executing the query
//         // Closing the connection
//
//

console.log('Connected to the in-memory SQlite database.');


console.log('#2 Connected to the in-memory SQlite database.');
/*const mySqlHandler = required('sqlite3').verbose();*/
// open database in memory
let db = new mySqlHandler.Database(':myblog:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

    function createDatabase(){
        console.log('Connected to the in-memory SQlite database.');
        try{

// close the database connection
            db.close((err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('Close the database connection.');
            });
        }catch(e){
            alert(e);
        }
    }
function executeQuery($query,callback){
    try{
        if(window.openDatabase){
            db.transaction(
                function(tx){
                    tx.executeSql($query,[],function(tx,result){
                        if(typeof(callback) == "function"){
                            callback(result);
                        }else{
                            if(callback != undefined){
                                eval(callback+"(result)");
                            }
                        }
                    },function(tx,error){});
                });
            return rslt;
        }
    }catch(e){}
}
function createTable(){
    var sql = 'select * from company';
   executeQuery(sql);
    //console.log(" result from db: " + executeQuery(sql) )
    var sqlC = 'CREATE TABLE image (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, image BLOB )';
    executeQuery(sqlC);
}
function insertValue(){
    var img = document.getElementById('image');
    var sql = 'insert into image (name,image) VALUES ("sujeet","'+img+'")';
    executeQuery(sql,function(results){alert(results)});
}



























