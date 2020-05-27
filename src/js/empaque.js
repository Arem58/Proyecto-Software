const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')

var db_config ={
    host: 'localhost',
    user: 'root',
    passwor: 'MySQL', //CAMBIAR ESTA CONTRASEÑA
    port: 3306,
    database: 'polimeros'
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

const Empaque = sequelize.define('Empaque',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    semana: {
        type: Sequelize.INTEGER
    },
    mes: {
        type: Sequelize.INTEGER
    },
    fecha: {
        type: Sequelize.DATE
    },
    operador_id: {
        type: Sequelize.STRING
    },
    producto_id: {
        type: Sequelize.STRING
    },
    total_prod: {
        type: Sequelize.INTEGER
    },
    total_peso: {
        type: Sequelize.DECIMAL(10,2)
    },
    primeras: {
        type: Sequelize.INTEGER
    },
    peso_prod_prim: {
        type: Sequelize.DECIMAL(10,2)
    },
    cumplimiento_prim: {
        type: Sequelize.FLOAT
    },
    segundas: {
        type: Sequelize.INTEGER
    },
    peso_prod_seg: {
        type: Sequelize.DECIMAL(10,2)
    },
    cumplimiento_seg: {
        type: Sequelize.FLOAT
    },
    terceras: {
        type: Sequelize.INTEGER
    },
    peso_prod_ter: {
        type: Sequelize.DECIMAL(10,2)
    },
    cumplimiento_ter: {
        type: Sequelize.FLOAT
    },
    paro_id: {
        type: Sequelize.STRING
    },
    no_diario: {
        type: Sequelize.STRING
    },

})


Empaque.sync()

