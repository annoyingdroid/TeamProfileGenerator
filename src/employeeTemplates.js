const engineerCard = function (engineer) {
    return `
        <div class="card col-md-3 m-3">
            <div class="card-header">
                <h3>${engineer.getName()}</h3>
                <h5><i class="fa fa-robot"></i> ${engineer.getRole()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item">${engineer.getId()}</li>
                <li class="list-group-item">${engineer.getEmail()}</li>
                <li class="list-group-item">${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    `
}

const internCard = function (intern) {
    return `
        <div class="card col-md-3 m-3">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h5><i class="fa-solid fa-school"></i> ${intern.getRole()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item">${intern.getId()}</li>
                <li class="list-group-item">${intern.getEmail()}</li>
                <li class="list-group-item">${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `;
}

const managerCard = function (manager) {
    return `
        <div class="card col-md-3 m-3">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h5><i class="fa-solid fa-people-roof"></i> ${manager.getRole()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${manager.getId()}</li>
                    <li class="list-group-item">${manager.getEmail()}</li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `;
}

const pageStart = function () {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Page</title>
        
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div>
                <div class="navbar navbar-expand-lg bg-black bg-opacity-50" style="background:lightblue">
                    <h1 class="p-4" >Your Team</h1>
                </div>
                <div class="d-flex justify-content-evenly col-sm-12 flex-wrap mt-4" style="flex-basis: 100%">
    `;
}

const pageEnd = function () {
    return `
        </div>
        </body>
    </html>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="index.js"></script>
    `;
}

const buildPage = (pageData) => {
    var i = 0;
    var pageGen = [];

    pageGen.push(pageStart());
     
    while (i < pageData.length){
        switch(pageData[i].getRole()){
            case 'Engineer': pageGen.push(engineerCard(pageData[i])) ; i++; break;
            case 'Intern': pageGen.push(internCard(pageData[i])); i++; break;
            case 'Manager': pageGen.push(managerCard(pageData[i])); i++; break;
            default: break;
        }
    }

    pageGen.push(pageEnd());

    return pageGen.toString();
}

module.exports = buildPage;