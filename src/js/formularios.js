const remote = require('electron').remote

const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')

// var db_config ={
//     host: 'localhost',
//     user: 'root',
//     passwor: 'MySQL', //CAMBIAR ESTA CONTRASEÑA
//     port: 3306,
//     database: 'users'
// }

var db_config = {
    host: 'localhost',
    user: 'groot',
    passwor: '7654321.', //CAMBIAR ESTA CONTRASEÑA
    port: 3306,
    database: 'prensas'
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

const vulcanizados = sequelize.define('vulcanizado',{
    id: { // numero_formulario
        type: Sequelize.INTEGER
    },
    operador_id:{
        type: Sequelize.INTEGER
    },
    prensa_id:{
        type: Sequelize.INTEGER
    },
    producto_id:{
        type: Sequelize.INTEGER
    },
    cargas_program:{
        type: Sequelize.INTEGER
    },
    tiempo_real:{
        type: Sequelize.INTEGER
    },
    tiempo_no_utilizado:{
        type: Sequelize.INTEGER
    },
    buen_estado:{
        type: Sequelize.INTEGER
    },
    semana:{
        type: Sequelize.INTEGER
    },
    mes:{
        type: Sequelize.INTEGER
    },
    producto_defecto:{
        type: Sequelize.INTEGER
    },
    faltante_cargas:{
        type: Sequelize.INTEGER
    },
    mes:{
        type: Sequelize.INTEGER
    },
    type:{
        type: Sequelize.STRING
    }
})


vulcanizados.sync()


const getValues = () => ({
    numero_formulario : document.getElementById('numero-formulario').value,
    fecha : document.getElementById('fecha').value,
    semana : document.getElementById('semana').value,
    mes : document.getElementById('mes').value,
    codigo_operador : document.getElementById('operador-id').value,
    codigo_producto : document.getElementById('producto-id').value,
    codigo_prensa : document.getElementById('prensa-id').value,
    cargas_program : document.getElementById('cargas-program').value,
    producto_defecto : document.getElementById('producto-defecto').value,
    buen_estado : document.getElementById('buen-estado').value,
    total_cargas : document.getElementById('total-cargas').value,
    cargas_faltantes : document.getElementById('cargas-faltantes').value,
    // fin primera col.
    porcentaje_cump_total : document.getElementById('porcentaje_cump_total').value, // double
    porcentaje_buen_estado : document.getElementById('porcentaje_buen_estado').value, // double
    paro_id : document.getElementById('paro').value,
    peso_producir : document.getElementById('peso_producir').value, // decimal
    peso_producido : document.getElementById('peso_producido').value,// decimal
    faltante : document.getElementById('faltante').value, // decimal
    rebaba : document.getElementById('rebaba').value, // decimal
    cumplimiento_kg : document.getElementById('cumplimiento_kg').value, // double
    tiempo_real : document.getElementById('tiempo_real').value, // int
    tiempo_no_utilizado : document.getElementById('tiempo_no_utilizado').value, // int
    kwh : document.getElementById('kwh').value, // int
});

const printValues = () => {
    values = getValues();

}

const formButton = document.getElementById('form-button');

formButton.setAttribute('onclick', 'printValues()');



// render(root);

let w = remote.getCurrentWindow()
function exitFromApp(){
    w.close();
}

