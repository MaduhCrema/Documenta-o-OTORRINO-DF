import './index.html';
import "regenerator-runtime/runtime";
import RelatoriosControl from './scripts/CONTROLER/RelatoriosControler';

window.teste = function(event){
    RelatoriosControl.upload(event);
}
window.teste2 = function(event){
    RelatoriosControl.acessoCloud(event);
}