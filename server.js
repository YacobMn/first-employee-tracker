const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Asemra1991@',
    database: 'ariair_db'
  },
  console.log(`Connected to the movies_db database.`)
);

function getEmployees(){
    db.query('SELECT * FROM movies', function (err, results) {
        if(err) throw err;
        console.table(results);
      });
}

function addDepartment(answers){
  db.query('insert into department (name) values (?)', [answers.name], (err, results)=>{
    if(err) throw err;
        console.table(results);
  })
}
// inq promt 
function startApp() {
  inquirer.prompt({
    type: 'list',
      message: 'what would you like to do?',
      name: "employee",
      choices: [
          'View All employees',
          'Add employess',
          'Update employee roles',
          'Add roles',
          'Veiw all departments'
      ]
  })
}.then((answer) => {

})

startApp();
  




