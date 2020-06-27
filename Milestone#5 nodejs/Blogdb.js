
const uniqid = require('uniqid');
document.querySelector('#MyBlog').innerHTML=uniqid();

function createDatabase(){
    console.log('Connected to the MyBlog SQlite database.');
    try{
        // trial
        const sqlite3 = required('sqlite3').verbose();

// open database in myBlog
        let db = new sqlite3.Database(':MyBlog:', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the myBlog SQlite database.');
        });
//close the database connection
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