const root = document.getElementById('root');
const ingbut = document.getElementById('ingreso-manual');
ingbut.style.color('black');

const remote = require('electron').remote;

const render = (mount) => {
    mount.innerHTML = '';
    const contenedorBoard = document.createElement('div');
    contenedorBoard.setAttribute('class','board');
    contenedorBoard.style.width = '550px';
    contenedorBoard.style.height = '550px';
    mount.appendChild(contenedorBoard);
};

render(root);

let w = remote.getCurrentWindow()
function exitFromApp(){
    w.close();
}