class cloud{
        static atualizaUp(event){
            const upload = new Upload({ apiKey: "public_kW15ati2ydrfnS8qxwHmTHJq5FAU" })
            async function filesUp(){
                try{
                    const {data:items} = await axios.get("https://api.upload.io/v1/files?accountId=kW15ati&pageSize=10",{headers:{
                        Authorization: "Basic YXBpa2V5OnNlY3JldF9rVzE1YXRpNjlWZkRuUHA1YTdrWjRQVUNFVkdK"
                    }});
                    
                    let cont = 1
                    var galeriaArquivos = document.getElementById("galeria");
                    for (var i = 0; i < items.items.length; i++) { 
                        moment.locale('pt-br');
                        const agora = moment(items.items[i].uploadedAt).format('LL');   
                        var data = "<h4 class='title'>" + agora + "</h4>";
                        var novoElemento ="<div class='elemento'><a href='"+items.items[i].fileUrl+"'class='title' target='_blank'> "+ items.items[i].name+"</a>"+ data +" </div>";  
                        galeriaArquivos.innerHTML += novoElemento;
                        cont++
                    }
                    console.log(items)
                }catch(e){
                    console.log(e);
                }
            }
            filesUp(event);
        }

        static acessoUpload(event) {  
            console.log(event);         
            // 1) Instantiate Upload.js (at start of app).
            const upload = new Upload({ apiKey: "public_kW15ati2ydrfnS8qxwHmTHJq5FAU" })
            var arquivos = ["https://upcdn.io/kW15ati8Xdo2jqsS8EgkbnB"]
            // <input type="file" onchange="onFileSelected(event)" />
            async function onFileSelected(event) {  
                try {
                    
                    // 3) Upload file & show progress.
                    const [ file ]    = event.target.files
                    const { fileUrl, ...rest } = await upload.uploadFile({file, 
                    onProgress: ({ progress }) => 
                        h1.innerHTML = `
                        </br>
                        Carregando arquivo... ${progress}%`
                        
                    })
                    h1.innerHTML=`</br>`
                    //add lista arquivos  
                    arquivos.push(fileUrl)
                    console.log(rest)
                    //galeria();
                } catch(e) {
                    // 5) Display errors.
                    console.log(e);
                }  
    
            }
            onFileSelected(event);
        }
}

export default cloud;