/* Vamos a aprender a seleccionar elementos en js*/
console.log(document.getElementsByTagName("h1")); // Por etiqueta
console.log(document.getElementsByClassName("h1")); // Por clase
console.log(document.getElementById("titulo")); // Por Id

console.log(document.querySelector("h1")); // Por etiqueta
console.log(document.querySelector(".main__title")); // Por clase
console.log(document.querySelector("#titulo")); // Por Id

/* Selecciono multiples objetos*/
console.log(document.querySelector(".header__btn")); // Solo se queda con el primero
console.log(document.querySelectorAll(".header__btn")); // Me devuelve un array de objetos
console.log(document.getElementsByClassName("header__btn")); // Me devuelve un array de objetos


/* EJ1: Vamos a aprender a seleccionar y modificar un elemento concreto*/
/* EJ2: Vamos a aprender a cambiar las propiedades css de nuestro objeto (estilos)*/
function cambiar(){

    /* EJ1*/
    let titulo = document.querySelector("h1");
    const contenido = titulo.textContent;
    console.log(titulo.textContent) // Visualizo el contenido de nuestro objetivo
    if(contenido == "Hola mundo con JavaScript"){

    }else{
        titulo.textContent = "Hola mundo con JavaScript";
    }

    /* EJ2*/
    titulo.style.color = "red";
    titulo.style.textAlign = "center";
    titulo.style.backgroundColor = "yellow";

    /* Otra forma de hacerlo: creo una clase en css con las propiedades y añadir esta clase a nuestro objeto*/
    titulo.classList.toggle("main__title--change");

}

/* Para trabajar con eventos, vamos a utilizar la funcion add.EvenListener*/
const btn_tit = document.querySelector(".header__btn--change");

btn_tit.addEventListener("Click", function(){

    cambiar();

});