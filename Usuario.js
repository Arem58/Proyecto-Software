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
Users.create({
    first_name: 'Renato',
    last_name: 'Estrada',
    email: 'arem.9958@gmail.com',
    password: 'Hola123',
    type: 'admin'
}).then(Users.findAll().then((users) => {
    users.forEach(user => {
        console.log('=========================================')
        console.log('first_name : ' + user.first_name)
        console.log('last_name : ' + user.last_name)
        console.log('email : ' + user.email)
        console.log('password : ' + user.password)
        console.log('type : ' + user.type)
        console.log('=========================================')
    })
}).catch((err) => {

}))