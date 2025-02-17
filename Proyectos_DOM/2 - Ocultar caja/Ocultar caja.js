function toggleBox() {
    let caja = document.getElementById("caja");
    let boton = document.getElementById("boton");

    if (caja.style.display === "none") {
        caja.style.display = "block";
        boton.textContent = "Ocultar Caja";
    } else {
        caja.style.display = "none";
        boton.textContent = "Mostrar Caja";
    }
}

document.getElementById("boton").addEventListener("click", toggleBox);

