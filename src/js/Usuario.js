const Sequelize = require('sequelize')

var db_config ={
    host: 'localhost',
    user: 'root',
    passwor: 'MySQL', //CAMBIAR ESTA CONTRASEÑA
    port: 3306,
    database: 'users'
}

var sequelize = new Sequelize('mysql://'+db_config.user+':'+db_config.passwor
+'@'+db_config.host + ':' + db_config.port + '/' + db_config.database + '')

sequelize.authenticate().then(()=>{
    console.log('=========================================')
    console.log('database : ' + db_config.database + 'connected')
    console.log('=========================================')


}).catch((err) => {
    console.log('=========================================')
    console.log('error connecting : ' + err)
    console.log('=========================================')
})

const Users = sequelize.define('Usuario',{
    first_name:{
        type: Sequelize.STRING
    },
    last_name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    type:{
        type: Sequelize.STRING
    }
})


Users.sync()

function addUser(){
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    Users.create({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        type: 'admin'
    });
}

function checkUser(){
    var email = document.getElementById('email').value;
    var passwd = document.getElementById('passwd').value;

    const count = Users.count({
        where:{
            email: email,
            password: passwd
        }
    });

    if(count == 1){
        console.log("EXITO ")
    } else if(count ==0){
        console.log("USUARIO NO ENCONTRADO")
    };
    
}

//document.getElementById("Submit").onclick = addUser();
document.getElementById("signIn").conClick = checkUser();

