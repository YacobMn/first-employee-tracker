const inquirer = require('inquirer')
const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Asmera1991@',
    database: 'ariair_db'
  },
  console.log(`Connected to the movies_db database.`)
);

function getEmployees(){
    db.query('SELECT * FROM employee', function (err, results) {
        if(err) throw err;
        console.table(results);
      });
}

function getRoles(){
  db.query('SELECT * FROM roles' , function (err, results) {
      if(err) throw err;
      console.table(results);
    });
}

function getDepartments(){
  db.query('SELECT * FROM department', function (err, results) {
      if(err) throw err;
      console.table(results);
    });
}
function addDepartment(answers){
  db.query('insert into department (name) values (?)', [answers.department_name], (err, results)=>{
    if(err) throw err;
        console.table(results);
  })
}

function addRole(answers){
  db.query('insert into role (title, salary, department_id) values (?,?,?)', [answers.title, answers.salary, answers.department_id], (err, results)=>{
    if(err) throw err;
        console.table(results);
  })
}
function addEmployee(answers){
  db.query('insert into employee (first_name, last_name, role_name, manager_id ) values (?, ?, ?, ?)', [answers.first_name, answers.last_name, answers.role_name, answers.manager_id], (err, results)=>{
    if(err) throw err;
        console.table(results);
  })
}

function updateEmployee(answer){


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
          'add departments',
          'view all roles',
          'Veiw all departments'
      ]
}).then((answer) =>{
  if("View All employees" === answer.employee){
    getEmployees();
  } else if ("Add employess"=== answer.employee){
    getEmployees()
  }else if ("Update employee roles" === answer.employee){
    getEmployees()
  } else if ("Add roles" === answer.employee){

  } else if ("add departments" === answer.employee){
    inquirer.prompt([
      {
        type: 'input',
        message: 'would like to add departments name?',
        name: 'department_name'
      }
    ]).then(answers=>{
      addDepartment(answers)
    })
  }else if ("view all roles" === answer.employee){
    getRoles()
  } else if ("view all employee" === answer.employee){
    getEmployees()
  } else {
    console.log('if statment failed')
  }


  
})
}

db.connect(err => {
  if(err) throw err
  startApp();
})

  




