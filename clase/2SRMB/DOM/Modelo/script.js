
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


/*---------------------- Eventos y parte principal del codigo ---------------*/

/* Para trabajar con eventos, vamos a utilizar la funcion addEventListener*/
const btn_tit = document.querySelector(".header__btn--change");
const btn_blq = document.querySelector(".header__btn--create");
const btn_rem = document.querySelector(".header__btn--remove");

btn_tit.addEventListener("click", function(){
    /* Cambiar el contenido y la apariencia (css) de mi etiqueta*/
    cambiar();
    /* Cambiar la apariencia de mi boton*/
    this.classList.toggle("header__btn--click");
});

btn_blq.addEventListener("click", function(){
    /* Creamos un nuevo objeto div con propiedades y contenido especifico */
    crearDiv();
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

// Esto es una modificacion nueva para mergear


