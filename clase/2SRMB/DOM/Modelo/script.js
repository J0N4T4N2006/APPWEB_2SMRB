/*------------------------- Introduccion ------------------------------*/

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

console.clear();
/* ------------------------ Funciones ------------------------------*/

/* EJ1: Vamos a aprender a seleccionar y modificar un elemento en concreto*/
/* EJ2: Vamos a aprender a cambiar las propiedades css de nuestro objeto (estilos)*/
function cambiar(){

    /* EJ1*/
    let titulo = document.querySelector("h1");
    const contenido = titulo.textContent;
    console.log(titulo.textContent) // Visualizamos el contenido de texto de nuestro objeto

    if(contenido == "Hola mundo con JavaScript"){
        titulo.textContent = "Hola mundo";
    }else{
        titulo.textContent = "Hola mundo con JavaScript"; // Modificamos el valor del objeto
    }
    
    // Otra manera de acceder y modificar el contenido de un objeto*/
    // console.log(titulo.innerHTML); // Accedemos al contenido del objeto
    // titulo.innerHTML = "<br><br><br><br><em> Hola mundo <em>"; // Admite e interpreta etiquetas html

    /* EJ2*/
    /* Una forma de cambiar directamente las propiedades de estilo de un objeto -- No recomendada*/
    // titulo.style.color = "red";
    // titulo.style.textAlign = "center";
    // titulo.style.backgroundColor ="yellow";

    /*Otra forma de hacerlo: crearnos una clase en css con las propiedades y añadir esta clase
    a nuestro objeto*/
    titulo.classList.toggle("main__title--change");
}

// EJ3: Vamos a aprender a crear nuevos elementos y objetos dentro de mi html
function crearDiv(){

    if(!document.querySelector("div")){
        const new_ele = document.createElement("div"); // Creamos un nuevo elemento
        new_ele.textContent = "Javascript permite crear páginas dinámicas."; //Añadimos contenido
        new_ele.classList.add("texto"); // Añadimos el estilo
    
        // Posicionamos nuestro elemento detras del ultimo hijo de nuestra etiqueta padre
        // const padre = document.querySelector("main");
        // padre.appendChild(new_ele);
    
        // Posicionamos nuestro elemento detras de la etiqueta h1
        const titulo = document.querySelector("h1"); // elemento de referencia
        titulo.parentNode.insertBefore(new_ele, titulo.nextSibling)
    }   

}

 //EJ4: Vamos a aprender a borrar elementos de nuestro html de manera dinámica
 function borrar(){

    const ele_sel = document.querySelector("div"); // Seleccionamos el elemento a eliminar

    if(ele_sel){
        ele_sel.remove(); // Eliminamos el elemento de nuestro documento
    }
}

//EJ 6: Vamos a acceder a la propiedad src de multiples imagenes y vamos a guardar
// esa información en una variable que despues mostraremos en un nuevo contenedor div 
// que crearemos al final de nuestra web
function fuentesImg(){

    const imgs = document.querySelectorAll("img"); //Devuelve un array de imagenes
    let txt = "";
    imgs.forEach(imagen =>{
        txt += imagen.src + "<br>";
    });

    if(!document.querySelector(".fuente--create")){
        const new_ele = document.createElement("p"); // Creando un elemento nuevo
        new_ele.innerHTML = txt; // Modificando el contenido de ese elemento
        new_ele.classList.add("texto", "fuente--create");
        // Aqui posicionamos dentro del html nuestro nuevo elemento
        const padre = document.querySelector("main");
        padre.appendChild(new_ele);
    }else{
        const ele_sel = document.querySelector(".fuente--create"); // Seleccionamos el elemento a eliminar
        ele_sel.remove(); // Eliminamos el elemento de nuestro documento
    }
  

}

function Carrusel_img(){
    const ppal = document.querySelector(".main__carrusel__img");
    const imgs = document.querySelectorALL(".main__sub__fig__img");

    imgs.forEach(foto =>{
        if(foto.src == ppal.src){
            pos = cont;
        }
    }); cont++;

    if(ppal.src == imgs[imgs.length - 1].src){
    ppal.src = images[pos + 1].src;
    }else{
        ppal.src = imgs[pos + 1].src;
    }
}

/*---------------------- Eventos y parte principal del codigo ---------------*/

/* Para trabajar con eventos, vamos a utilizar la funcion addEventListener*/
const btn_tit = document.querySelector(".header__btn--change");
const btn_blq = document.querySelector(".header__btn--create");
const btn_rem = document.querySelector(".header__btn--remove");
const imgs = document.querySelectorAll(".main__sub__fig__img");
const btn_fnt = document.querySelector(".header__btn--font");
const btn_car = document.querySelector(".main_carrusel_img");

btn_tit.addEventListener("click", function(){
    /* Cambiar el contenido y la apariencia (css) de mi etiqueta*/
    cambiar();
    /* Cambiar la apariencia de mi boton*/
    this.classList.toggle("header__btn--click");
});

btn_blq.addEventListener("click", function(){
    /* Creamos un nuevo objeto div con propiedades y contenido especifico */
    if(this.classList.contains("header__btn--click")){
        borrar();
    }else{
        crearDiv();
    }
    /* Cambiar la apariencia de mi boton*/
    if(btn_rem.classList.contains("header__btn--click")){
        btn_rem.classList.remove("header__btn--click");
    }
    this.classList.toggle("header__btn--click");
});

btn_rem.addEventListener("click",function(){
    borrar();
    /* Cambiar la apariencia de mi boton*/
    if(btn_blq.classList.contains("header__btn--click")){
        btn_blq.classList.remove("header__btn--click");
    }
    this.classList.toggle("header__btn--click");
});

// EJ5: Accedemos a multiples fotos y accionamos un evento al pulsar en una de ellas. El evento
// solo se accionará sobre el elmento pulsado y no sobre el resto
imgs.forEach(foto =>{
    // ForEach es un for que se aplica sobre un array de objetos de la siguiente manera:
    // En la primera iter del bucle, la variable foto (nombre elegido por nosotros, como i en for)
    // tomará el valor del primer objeto del array imgs.
    // En la segunda iter del bucle, la varible foto tomará el valor del segundo objeto del array imgs
    // Y así sucesivamente hasta llegar al ultimo objeto del array
    foto.addEventListener("click", function(){
        const txt = foto.nextSibling; // Seleccionamos el elemento hermano del objeto seleccionado
        if(txt.textContent.trim() == ""){
            txt.textContent = foto.alt; // Accedemos a la propiedad alt del objeto foto
        }else{
            txt.textContent = "";
        }
        
    });
})

btn_fnt.addEventListener("click", function(){
    // Llamamos a la funcion fuentesImg para crear un parrafo con las urls de las fotos
    fuentesImg();

    //Modificamos el color del boton al clickar
    this.classList.toggle("header__btn--click");
});

//EJ7

function toggleClase() {
    const encabezado = document.querySelector('header');
    encabezado.classList.toggle('activo');

    
    document.addEventListener('DOMContentLoaded', function()
        const titular = document.querySelector('h1');
    
    
    .addEventListener('click', toggleClase);
});

//EJ8

btn_car.addEventListener("Click", function(){


});