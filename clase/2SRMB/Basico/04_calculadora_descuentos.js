document.addEventListener("DOMContentLoaded", function(){

    /* Definicion de funciones*/
    function PrecioDescuento(a, b){
        return a*(1 - b/100);
    }

    /* Parte principal del codigo (main) -- Llamada a la función*/
    const pre_usr = parseFloat(prompt("Introduce el precio original del producto"));
    const dsc_usr = parseFloat(prompt("Introduce el descuento a aplicar en el producto"));
    
    alert(" El precio final del producto después de aplicar un descuento del " + dsc_usr + 
         "% es: " + PrecioDescuento(pre_usr,dsc_usr) + " euros.")






});