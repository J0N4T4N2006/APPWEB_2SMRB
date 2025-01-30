document.addEventListener("DOMContentLoaded", function(){

    /*Definicion de las funciones*/
    function esPrimo(a){

        for(let i = 2; i < a; i++){
            if(a % i == 0){
                return false;
            }
        }

        return true;
    }

    /* Parte principal del codigo (main) -- Llamada a la funcion*/
    const num_1 = parseInt(prompt("Introduce un numero entero"));
    const num_2 = parseInt(prompt("Introduce otro numero entero"));
    let min, max;
    let lst = [];

    if(num_1 > 0 && num_2 > 0){

        // let esPrimo = (a) =>{

        //     for(let i = 2; i < a; i++){
        //         if(a % i == 0){
        //             return false;
        //         }
        //     }
    
        //     return true;
        // }

        if(num_1 >= num_2){
            max = num_1;
            min = num_2;
        }else{
            max = num_2;
            min = num_1;
        }
    
        for(let i = min; i <= max; i++){
            if(esPrimo(i)){
                lst.push(i);
            }
        }
    
        console.log(lst);

    }
    else{
        console.log("Error");
        console.log(esPrimo(45));
    }

   


});