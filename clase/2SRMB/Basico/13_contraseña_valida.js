document.addEventListener("DOMContentLoaded", function(){

    /* Definimos la funcion*/
    function contrasenaValida(string){

        if(string == "2Fj(jjbFsuj" || string == "eoZiugBf&g9"){
            return true;
        }

        return false;
    }

    // código de prueba -- Parte principal. Llamada a la funcion
    console.log(contrasenaValida("2Fj(jjbFsuj")) // true
    console.log(contrasenaValida("eoZiugBf&g9")) // true
    console.log(contrasenaValida("hola")) // false
    console.log(contrasenaValida("")) // false


});