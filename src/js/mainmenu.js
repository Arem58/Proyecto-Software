const root = document.getElementById('root');

const remote = require('electron').remote

let w = remote.getCurrentWindow()
function exitFromApp(){
    w.close();
}