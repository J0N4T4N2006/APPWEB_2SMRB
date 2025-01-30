document.addEventListener("DOMContentLoaded", function(){

    /*Definicion de funciones*/
    function SucesionFibonacci(num_ele){

        let f0 = 0;
        let f1 = 1;
        let lst_fib = [f0, f1];
        const n = lst_fib.length;

        for(let i = 0; i < num_ele - n; i++){
            let fn = f0 + f1; /*Calculamos el siguiente termino de la sucesion*/
            lst_fib.push(fn);
            /*Actualizamos el valor de las variables*/
            f0 = f1;
            f1 = fn;
        }

        return lst_fib;

    }

    /*Parte principal (main) -- Llamada de funciones*/
    console.log(SucesionFibonacci(10));

});