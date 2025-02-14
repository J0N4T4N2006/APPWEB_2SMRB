const boton_cambio_hex = document.getElementById("CambiaColorHex"); /* Esta constante me permite cambiar el color */
const texto_color_hex = document.querySelector(".main__color-name"); /* Esta selecciona los carácteres del color */

function generar_color_hex() {  /* Esta función genera los 20 colores de forma aleatoria en formato hexadecimal*/
    const caracteres = "0123456789ABCDEF";  /* Establezco los carácteres hexadecimales*/
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += caracteres[Math.floor(Math.random() * 16)]; /* Establezco que se generen carácteres hexadecimales aleatorios */
    }
    return color; /* Me devuelve el valor "color" */
}

boton_cambio_hex.addEventListener("click", () => {  /* Con esto permito que al hacer click se genere un nuevo color */
    const nuevo_color = generar_color_hex();  /* Aquí creo la constante "nuevo_color" para generar el color de fondo */
    document.body.style.backgroundColor = nuevo_color; /* Aquí establezo que el color de fondo sea el generado por la constante anterior */
    texto_color_hex.textContent = nuevo_color; /*  Por último, con esta línea hago que los carácteres hexadecimales cambien según el color*/
});

