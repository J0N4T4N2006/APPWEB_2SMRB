
/* Vamos a aprender a seleccionar elementos en js*/
console.log(document.getElementsByTagName("h1")); // por etiqueta
console.log(document.getElementsByClassName("main__title")); // por clase
console.log(document.getElementById("titulo")); // por id

console.log(document.querySelector("h1")); // por etiqueta
console.log(document.querySelector(".main__title")); //por clase
console.log(document.querySelector("#titulo")); //por id

/* Seleccionamos multiples objetos*/
console.log(document.querySelector(".header__btn")); // Solo se queda con el primero 
console.log(document.querySelectorAll(".header__btn")); // Me devuelve un array de objetos
console.log(document.getElementsByClassName("header__btn")); // Me devuelde un array de objetos


/* EJ1: Vamos a aprender a seleccionar y modificar un elemento en concreto*/
/* EJ2: Vamos a aprender a cambiar las propiedades css de nuestro objeto (estilos)*/
function cambiar(){

    /* EJ1*/
    let titulo = document.querySelector("h1");
    console.log(titulo.textContent) // Visualizamos el contenido de texto de nuestro objeto
    titulo.textContent = "Hola mundo con JavaScript"; // Modificamos el valor del objeto
    
    // Otra manera de acceder y modificar el contenido de un objeto*/
    // console.log(titulo.innerHTML); // Accedemos al contenido del objeto
    // titulo.innerHTML = "<br><br><br><br><em> Hola mundo <em>"; // Admite e interpreta etiquetas html

    /* EJ2*/
    
}

/* Para trabajar con eventos, vamos a utilizar la funcion addEventListener*/
const btn_tit = document.querySelector(".header__btn--change");

btn_tit.addEventListener("click", function(){
    cambiar();
});
