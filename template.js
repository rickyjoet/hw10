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
              <li>${manager.getID()}</li>
              <li>${manager.getName()}</li>
              <li>${manager.getEmail()}</li>
              <li>${manager.getRole()}</li>
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
                <li>${intern.getID()}</li>
                <li>${intern.getName()}</li>
                <li>${intern.getEmail()}</li>
                <li>${intern.getRole()}</li>
                <li>${intern.getSchool()}</li>
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
            <h3> Name: ${engineer.getName()} </h3>
            <p class="card-text">
              <ul>
                <li>${engineer.getID()}</li>
                <li>${engineer.getName()}</li>
                <li>${engineer.getEmail()}</li>
                <li>${engineer.getRole()}</li>
                <li>${engineer.getHub()}</li>
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