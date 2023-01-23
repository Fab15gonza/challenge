//var para todos los scripts//

var selectencriptar= document.querySelector(".boton-encriptar");
var selectdesencriptar= document.querySelector(".boton-desencriptar");
var selectcopiar=document.querySelector(".boton-copiar");
var resultado=document.querySelector(".parrafo-resultado");  
var ocultando=document.querySelector(".column2");


    function encriptarTexto(mensaje){
        var texto=mensaje;
        var textofinal="";
        for(var i=0; i<texto.length; i++){
            if(texto[i]=="a"){
                textofinal=textofinal+"ai"
            }
            else if(texto[i]=="e"){
                textofinal=textofinal+"enter"
            }
            else if(texto[i]=="i"){
                textofinal=textofinal+"imes"
            }
            else if(texto[i]=="o"){
                textofinal=textofinal+"ober"
            }
            else if(texto[i]=="u"){
                textofinal=textofinal+"ufat"
            }
            else{
                textofinal=textofinal+texto[i];
            }
        }
        return textofinal;
    }

    function desencriptarTexto(mensaje){
        var texto=mensaje;
        var textofinal="";
        for(var i=0; i<texto.length; i++){
            if(texto[i]=="a"){
                textofinal=textofinal+"a"
                i=i+1;
            }
            else if(texto[i]=="e"){
                textofinal=textofinal+"e"
                i=i+4;
            }
            else if(texto[i]=="i"){
                textofinal=textofinal+"i"
                i=i+3;
            }
            else if(texto[i]=="o"){
                textofinal=textofinal+"o"
                i=i+3;
            }
            else if(texto[i]=="u"){
                textofinal=textofinal+"u"
                i=i+3;
            }
            else{
                textofinal=textofinal+texto[i];
            }
        }
        return textofinal;
    }

    function ocultaradelante (){
        ocultando.classList.add("ocultar");
    }

    function recuperarTexto(){
        var area= document.querySelector(".area");
        return area.value;
    }

    function encriptar(){
        ocultaradelante();
        resultado.textContent=encriptarTexto(recuperarTexto());   
    }

    function desencriptar(){
    ocultaradelante();
    resultado.textContent=desencriptarTexto(recuperarTexto());
    }

        selectencriptar.onclick= encriptar;
        selectdesencriptar.onclick=desencriptar;





    



