document.addEventListener("DOMContentLoaded", function(){

    /*Definimos las funciones que vamos a utilizar*/
    function findLargestNumber(array){

        let max = array[0];
        for(let i = 0; i < array.length; i++){
            if(max < array[i]){
                max = array[i];
            }
        }

        return max;
    }

    /* Parte principal del código (main) -- Llamada a la función*/
    const num_ele_usr = parseInt(prompt("¿Cuantos numeros quieres introducir?"));
    let lst_usr = [];

    // alert("A continuación introduce los " + num_ele_usr + " elementos");
    for(let i = 0; i < num_ele_usr; i++){
        const num = parseInt(prompt("Introduce el elemento"));
        lst_usr.push(num);
    }

    console.log("El maximo de " + lst_usr + " es " + findLargestNumber(lst_usr));



});