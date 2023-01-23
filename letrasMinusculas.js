//se uso onclick="SoloLetras()" en escriptador.html en class="area"//

function SoloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnopqrstuvwxyz.,;:{}()/[]";
    especiales = [8,13,32];
    tecla_especial = false;
    
    for(var i in especiales) {
        if(key == especiales[i] ){
            tecla_especial = true; 
            break; 
        }
    }
    
    if(letras.indexOf(tecla) == -1 && !tecla_especial)
    {
        alert ("No se permite el ingreso de: numeros, caracteres especiales ni letras en mayusculas");
        return false;
    }
}