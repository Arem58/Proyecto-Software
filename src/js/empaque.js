const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')

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

const Empaque = sequelize.define('Empaque',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
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


function ingresarForm(){
    var noFormulario = document.getElementById('num').value;
    var fecha = document.getElementById('fecha').value;
    var semana = document.getElementById('semana').value;
    var mes = document.getElementById('mes').value;
    var codigoOp = document.getElementById('operador').value;
    var codioProd = document.getElementById('producto').value;
    var totalPeso = document.getElementById('totalPeso').value;
    var totalProd = document.getElementById('totalProd').value;
    var primeras = document.getElementById('primeras').value;
    var pesoProdPrim = document.getElementById('pesoProdPrim').value;
    var cumplimientoPrim = document.getElementById('cumplimientoPrim').value;
    var segundas = document.getElementById('segundas').value;
    var pesoProdSeg = document.getElementById('pesoProdSeg').value;
    var cumplimientoSeg = document.getElementById('cumplimientoSeg').value;
    var terceras = document.getElementById('terceras').value;
    var pesoProdTer = document.getElementById('pesoProdTer').value;
    var cumplimientoTer = document.getElementById('cumplimientoTer').value;
    var motivoParo = document.getElementById('paro').value;
    var noDiario = document.getElementById('noDiario').value;

    if(noFormulario != "" && fecha != "" && semana != "" && mes != "" && codigoOp != "" && codioProd != "" && totalPeso != "" && totalProd != "" && primeras != "" && pesoProdPrim != "" && cumplimientoPrim != "" && segundas != "" && pesoProdSeg != "" && cumplimientoSeg != "" && terceras != "" && pesoProdTer != "" && cumplimientoTer != "" && motivoParo != "" && noDiario != "")
    {
        Empaque.create({
            id: noFormulario,
            semana: semana,
            mes: mes,
            fecha: fecha,
            operador_id: codigoOp,
            producto_id: codigoOp,
            total_prod: totalProd,
            total_peso: totalPeso,
            primeras: primeras,
            peso_prod_prim: pesoProdPrim,
            cumplimiento_prim: cumplimientoPrim,
            segundas: segundas,
            peso_prod_seg: pesoProdSeg,
            cumplimiento_seg: cumplimientoSeg,
            terceras: terceras,
            peso_prod_ter: pesoProdTer,
            cumplimiento_ter: cumplimientoTer,
            paro_id: motivoParo,
            no_diario: noDiario
        })
        alert("Formulario ingresado exitosamente.");
        location.reload();
    }
    else
    {
        alert("Uno o mas campos estan vacios.");
        location.reload();
    }
    
}
const preFillFecha = () => {
    let fecha = document.getElementById('fecha').value;
    let mes = document.getElementById('mes');
    let semana = document.getElementById('semana');
    let m = fecha.slice(5,7);
    semana.value = '22';
    mes.value = m;  //fill mess
    let d = fecha.slice(8);
    

    console.log(fecha, typeof(fecha));
};

fecha = document.getElementById("fecha");
fecha.setAttribute('onchange', 'preFillFecha()');
document.getElementById("ingresar").onClick = ingresarForm;



