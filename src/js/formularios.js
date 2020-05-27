const remote = require('electron').remote
const root = document.getElementById('root');


const formularios = ['Laminado de Calandra', 'Troquelado de Tela', 'Pesado de Formulas', 'Vulcanizado de Suela', ];

const render = (mount) => {
    mount.innerHTML = '';
    const header = document.createElement('div');
    header.setAttribute('class','header');
    header.style.width = '100%';
    header.innerText = 'Formularios';
    mount.appendChild(header);

    const select = document.createElement('select');
    select.setAttribute('class', 'dropdown');
    select.setAttribute('id', 'select');
    select.setAttribute('onchange', 'changeFormulario(this)');
    
    let options = formularios.map(x => {
        let b = document.createElement('option');
        b.setAttribute('value', x);
        b.innerText = x;
        return b;
    });

    options.forEach(element => {
        select.appendChild(element);
    });

    mount.appendChild(select);

};
const changeFormulario = (element) => {


    switch(element.value) {
        case 'Laminado de Calandra': {
            console.log('Laminado de Calandra');
            break;
        }
        case 'Troquelado de Tela': {
            console.log('Troquelado de Tela');
            break;
        }
        case 'Pesado de Formulas': {
            console.log('Pesado de Formulas');
            break;
        }
        case 'Vulcanizado de Suela': {
            console.log('Vulcanizado de Suela');
            break;
        }

    }
};

const getValues = () => ({
    numero_formulario : document.getElementById('numero-formulario').value,
    tipo_formulario : document.getElementById('formSelect').value,
    fecha : document.getElementById('fecha').value,
    semana : document.getElementById('semana').value,
    mes : document.getElementById('mes').value,
    codigo_operador : document.getElementById('codigo-operador').value,
    codigo_producto : document.getElementById('codigo-producto').value,


});

const printValues = () => {
    console.log(getValues());
}

const formButton = document.getElementById('form-button');
console.log('hey');
formButton.setAttribute('onclick', 'printValues()');
console.log('ho');


// render(root);

let w = remote.getCurrentWindow()
function exitFromApp(){
    w.close();
}

/**
 * query para pre llenar formulario
 * query para guardar la info del formulario segun tipo de formulario
 */