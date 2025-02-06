
/* --------------------------------------- Funciones ------------------------------------------------- */

/* Ejercicio 1 y 2*/
function cambiar(elemento, texto, clase){

    elemento.textContent = texto;

    // /*Modo 1 -- cambiando las propiedades directamente*/
    // elemento.style.color = "red";
    // elemento.style.textAlign = "center";

    /*Modo 2 -- añadiendo una clase ya definida en css con las propiedades que queremos*/
    elemento.classList.add(clase);

}

/* Ejericio 3 */
function creaDiv(elemento, elementoPadre, elementoHermano, cadena, clase){

    const div = document.createElement(elemento);
    const main = document.querySelector(elementoPadre);
    const title = document.querySelector(elementoHermano);

    /* Modificamos el contenido y el estilo del nuevo elemento creado*/
    div.textContent = cadena;
    div.classList.add(clase);

    // /*Tambien se podrian añadir los estilos de esta manera, aunque si es mas de uno
    // se recomienda utilizar clases de css. Ademas para generalizar la funcion tiene mas
    // sentido hacerlo con clases*/
    // div.style.color = "white";
    // div.style.backgroundColor = "red";
    // div.style.margin = "2rem";

    if(title){
        /* Opcion 1: Añadimos el div debajo del titulo*/
        title.parentNode.insertBefore(div, title.nextSibling);

    }else{
        /* Opcion 2: Añadimos el div al final de la pagina*/
        main.appendChild(div);
    }

}

/*Ejercicio 4*/
function borrar(elemento){
    let txt = document.querySelector(elemento);
    if(txt){
        txt.remove();
    }
}

/*Ejercicio 5*/
function subtitulos(elemento){

    /*Accedemos al atributo alt de la imagen*/
    const alt = elemento.alt;

    /*Seleccionamos la etiqueta figcaption que es posterior a nuestro elemento*/
    const fig = elemento.nextSibling;

    /*Modificamos el texto del figcaption*/
    if(fig.textContent.trim() == ""){
        fig.textContent = alt;
    }else{
        fig.textContent = "";
    }
        
}

/*Ejercicio 6*/
function fuentesImg(elemento){

    /*Seleccionamos los elementos*/
    const sel_ele = document.querySelector(elemento);
    const all_imgs  = document.querySelectorAll("img");

    if(!sel_ele){
        /*Para cada url creamos una etiqueta li con la información correspondiente*/
        creaDiv(elemento, ".main", ".main__carrusel", "");
        all_imgs.forEach(img =>{
            creaDiv("li", "ul", "li", img.src, "texto");
        })
    }else{
        /*Si ya existe la etiqueta padre, la borramos*/
        borrar("ul");
    }
}

/*-------------------------------------- Main --------------------------------------------------------*/

/*Variables y parámetros*/
const btn_tit = document.querySelector(".header__btn--change");
const btn_crt = document.querySelector(".header__btn--create");
const btn_rmv = document.querySelector(".header__btn--remove");
const btn_fon = document.querySelector(".header__btn--font");
const btn_cls = document.querySelector(".header__btn--cls");
const btn_subt = document.querySelector(".header__btn--subt");
const btn_img = document.querySelector(".main__carrusel__img");
const btn_menu = document.querySelector(".header__btn--open");
const imgs = document.querySelectorAll(".main__sub__fig__img");
const btns = document.querySelectorAll(".header__btn");
const btn_fnt = document.querySelectorAll(".header__btn--font")


/*Eventos*/

/*Ejercicios 1 y 2*/
btn_tit.addEventListener("click", function(){

    const txt = document.querySelector(".main__title");
    if(!txt.classList.contains("main__title--change")){
        cambiar(txt, "Hola mundo con JavaScript", "main__title--change");
    }else{
        console.log(txt.classList);
        txt.textContent = "Hola mundo";
        txt.classList.remove("main__title--change");
        console.log(txt.classList);
    }
    
    /*Cuando pulsamos el boton cambia de color*/
    btn_tit.classList.toggle("header__btn--click");
});

/*Ejercicio 3*/
btn_crt.addEventListener("click", function(){

    const div = document.querySelector("div");
    if(!div){
        creaDiv("div", ".main", ".main__title", "Javascript permite crear páginas dinámicas.", "texto");
    }else{
        borrar("div");
    }
    /*Cuando pulsamos el boton cambia de color*/
    btn_crt.classList.toggle("header__btn--click");      
});

/*Ejercicio 4*/
btn_rmv.addEventListener("click", function(){
    /* Borramos el elemento*/
    borrar(".main__txt");
    /*Cuando pulsamos el boton cambia de color*/
    btn_rmv.classList.toggle("header__btn--click");
});

/* Ejercicio 5*/
imgs.forEach(foto =>{

    foto.addEventListener("click", function(){
        subtitulos(foto);
    });

});

/* Ejercicio 6*/
btn_fon.addEventListener("click", function(){

    /*Llamamos a la funcion y le decimos que nos proporcione un listado ul con los enlaces*/
    fuentesImg("ul");

    /*Cuando pulsamos el boton cambia de color*/
    btn_fon.classList.toggle("header__btn--click");
});

/* Ejercicio 7*/
btn_cls.addEventListener("click", function(){

    /* Añadimos una clase al cabecero*/
    const sel_ele = document.querySelector(".header");
    sel_ele.classList.toggle("header--active");
    /*Cuando pulsamos el boton cambia de color*/
    btn_cls.classList.toggle("header__btn--click");

});

/* Ejercicio 8*/
btn_subt.addEventListener("click", function(){

    const div = document.querySelector(".destacar");
    if(!div){
        creaDiv("div", ".main", ".main__title", "Pagina Modelo", "destacar");
    }else{
        borrar(".destacar");
    }
    /*Cuando pulsamos el boton cambia de color*/
    btn_subt.classList.toggle("header__btn--click");  

});

/* Ejercicio 9 */
btn_img.addEventListener("click", function(){

    /*Seleccionamos la url del que hemos hecho click en el momento*/
    const url = btn_img.src;
    let cont = 0; // Variables auxiliares
    let pos; //Variables auxiliares

    /* Identificamos en que posicion se encuentra la foto a la hora de hacer click y guardamos su posicion
    en la variable pos*/
    imgs.forEach(img =>{
        if(img.src == url){
            pos = cont;
        }
        cont++;
    });

    /*Conociendo su posicion en el momento de hacer click cambiamos el valor de su atributo src, que es
    donde indicamos la ruta de la imagen*/
    if(pos == imgs.length - 1){
        btn_img.src = imgs[0].src;
    }else{
        btn_img.src = imgs[pos + 1].src;
    }

});

/* Ejericio 10 */
btn_menu.addEventListener("click", function(){

    btns.forEach(btn =>{

        if(btn != btn_menu){
            if(btn.style.display != "none"){
                btn.style.display = "none";
            }else{
                btn.style.display = "inline-block";
            }    
        }

    });

    /*Cuando pulsamos el boton cambia de color*/
    btn_menu.classList.toggle("header__btn--click");

});






