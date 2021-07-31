const Employee = require("./lib/employee");

const generateTeam = team => {
    const createManager = manager =>{
        return `    
      <div class="col">
      <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="manager">Manager</h5>
          <h3> Name:  ${manager.getName()}</h3>
          <p class="card-text">
            <ul>
              <li>Manager ID: ${manager.getID()}</li>
              <li>Manager Name: ${manager.getName()}</li>
              <li>Manager Email: ${manager.getEmail()}</li>
              <li>Manager Role: ${manager.getRole()}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
      
        `    
    }
    const createIntern = intern =>{
        return `
        <div class="col">
        <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
          <div class="card-body">
            <h5 class="intern">Intern</h5>
            <h3> Name: ${intern.getName()} </h3>
            <p class="card-text">
              <ul>
                <li>Intern ID: ${intern.getID()}</li>
                <li>Intern Name: ${intern.getName()}</li>
                <li>Intern Email: ${intern.getEmail()}</li>
                <li>Intern Role: ${intern.getRole()}</li>
                <li>Intern School: ${intern.getSchool()}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

        `
    }
    const createEngineer = engineer =>{
        return `
        <div class="col">
        <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
          <div class="card-body">
            <h5 class="engineer">Engineer</h5>
            <h3> Engineer Name: ${engineer.getName()} </h3>
            <p class="card-text">
              <ul>
                <li>Engineer ID: ${engineer.getID()}</li>
                <li>Engineer Name: ${engineer.getName()}</li>
                <li>Engineer Email: ${engineer.getEmail()}</li>
                <li>Engineer Role: ${engineer.getRole()}</li>
                <li>Engineer gitHub: ${engineer.getHub()}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

        `
    }
    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        )

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
        )

        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => createEngineer(engineer))
            .join("")
            )
            return html.join("")

};

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>
    <h1 class="card text-white bg-primary mb-3 " style="max-width: 18rem;">My Team </h1>
    <div class="row row-cols-1 row-cols-md-2 g-4">
    ${generateTeam(team)}
    </div>
    </body>
    </html>

    `
}