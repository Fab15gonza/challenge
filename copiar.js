
//la variable resultado y selectcopiar estan en el archivo encriptador.js"

function copiar(){
    resultado.select();
    document.execCommand("copy");
    document.getElementsByClassName("area")[0].value = "";
}

selectcopiar.onclick=copiar;