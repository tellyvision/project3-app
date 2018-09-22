var mysql = require("mysql");
var connection;


if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'project3',
        port     : 3306,
        multipleStatements  : true
    });
}

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err);
      return;
    };
  
    console.log('connected as: ' + connection.id);
  
  });
  
module.exports = connection;