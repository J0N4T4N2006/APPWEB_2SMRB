/* Con esta función declaro la lista de los 20 colores necesarios */
const colores = ["red", "yellow", "green", "purple", "pink", "blue", "orange", "brown", "cyan", "white", "grey", "teal", "lavender", "black", "maroon", "beige", "olive", "coral", "turquoise", "silver"];

const cambio_color = document.getElementById("CambiaColor");  /* Esta constante selecciona el elemento según su Id, en este caso elije "CambiaColor" */
const texto_color = document.querySelector(".main__color-name");  /* Esta constante selecciona la clase ".main__color-name" */
const color_texto = document.querySelector(".main__color-change");  /* Esta constante selecciona la clase ".main__color-change" */

cambio_color.addEventListener("click", () => {  /* Aqui añado un evento que al hacer click en el boton hace cambie el color de fondo y el nombre */
    const color_aleatorio = colores[Math.floor(Math.random() * colores.length)];  /* Con esta constante genero colores de forma aleatoria */
    document.body.style.backgroundColor = color_aleatorio;  /* Aquí establezco que el color de fondo se establezca aleatoriamente */
    texto_color.textContent = color_aleatorio;  /* Y por último, aquí establezo que el nombre del color cambie según el color de fondo */
});

    
