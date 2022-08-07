import cloud from "../MODEL/acessoClud";
class RelatoriosControl{
    static acessoCloud(event){
        cloud.atualizaUp(event);
    }

    static upload(event) {  
        cloud.acessoUpload(event);
    }

}

export default RelatoriosControl;