var colorBody=document.getElementsByTagName("body")[0];
var colorArea=document.getElementsByClassName("area")[0];
var colorColumna1=document.getElementsByClassName("p_informacion")[0];
var colorColumna2=document.getElementsByClassName("contenedor-column2")[0];
var colorColumna3=document.getElementsByClassName("resultado")[0];
var colorParraforesultado=document.getElementsByClassName("parrafo-resultado")[0];
var colorCreador=document.getElementsByClassName("creador")[0];

//se uso onclick="fondoBlanco()" en escriptador.html en class="boton-blnaco"//
function fondoBlanco(){
    colorBody.style.backgroundColor= "rgb(247, 247, 251)";
    colorArea.style.backgroundColor="rgb(247, 247, 251)";
    colorColumna1.style.color="black";
    colorColumna2.style.backgroundColor="rgb(247, 247, 251)";
    colorColumna2.style.color="black";
    colorColumna3.style.backgroundColor="rgb(247, 247, 251)";
    colorColumna3.style.color="black";
    colorParraforesultado.style.backgroundColor="rgb(247, 247, 251)";
    colorArea.style.color="black";
    colorParraforesultado.style.color="black";
    colorCreador.style.color="black";
}

//se uso onclick="fondoNegro()" en el archivo escriptador.html en la class="boton-negro"//

function fondoNegro(){
    colorBody.style.backgroundColor= "rgb(13,31, 38)";
    colorArea.style.backgroundColor="rgb(13,31, 38)";
    colorColumna1.style.color="white";
    colorColumna2.style.backgroundColor="rgb(13,31, 38)";
    colorColumna2.style.color="white";
    colorColumna3.style.backgroundColor="rgb(13,31, 38)";
    colorColumna3.style.color="white";
    colorParraforesultado.style.backgroundColor="rgb(13,31, 38)";
    colorArea.style.color="white";
    colorParraforesultado.style.color="white";
    colorCreador.style.color="white";
}


