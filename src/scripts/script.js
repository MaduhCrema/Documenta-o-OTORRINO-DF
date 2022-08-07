// 1) Instantiate Upload.js (at start of app).
const upload = new Upload({ apiKey: "public_kW15ati2ydrfnS8qxwHmTHJq5FAU" })
var arquivos = ["https://upcdn.io/kW15ati8Xdo2jqsS8EgkbnB"]
// <input type="file" onchange="onFileSelected(event)" />
async function onFileSelected(event) { 
  try {
    
    // 3) Upload file & show progress.
    const [ file ]    = event.target.files
    const { fileUrl } = await upload.uploadFile({file, 
      onProgress: ({ progress }) => 
        h1.innerHTML = `
        </br>
        Carregando arquivo... ${progress}%`
        
    })
    h1.innerHTML=`</br>`
    //add lista arquivos  
    arquivos.push(fileUrl)
    galeria()
  } catch(e) {
    // 5) Display errors.
    h1.innerHTML = `Please try another file:<br/><br/>${e.message}`
  }  

}

function galeria(){
  
  var galeriaArquivos = document.getElementById("galeria");
  //apagar o conteudo e percorrer a lista toda vez que houver alterações
  galeriaArquivos.innerHTML = ""; 
  moment.locale('pt-br');
  const agora = moment().format('LL');
  cont = 1
  for (var i = 0; i < arquivos.length; i++) {    
    console.log(agora)
    var data = "<h4 class='title'>" + agora + "</h4>";
    var novoElemento ="<div class='elemento'><a href='"+arquivos[i]+"'class='title'> Relatório "+ cont +"</a>"+ data +" </div>";  
    galeriaArquivos.innerHTML += novoElemento;
    cont++
  }
}