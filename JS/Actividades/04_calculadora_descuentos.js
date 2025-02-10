document.addEventListener("DOMContentLoaded", function() {
    /* Definición de funciones */
    function PrecioDescuento(pre_ori, dsc) {
        return pre_ori * (1 - dsc / 100);
    }

    /* MAIN */
    const pre_usr = parseFloat(prompt("Introduce el precio original del producto:"));
    const dsp_usr = parseFloat(prompt("Introduce el descuento para aplicar al producto (%):"));

    alert(
        "El precio final del producto después de aplicar un descuento del " + 
        dsp_usr + "% es: " + PrecioDescuento(pre_usr, dsp_usr) + " euros."
    );
});