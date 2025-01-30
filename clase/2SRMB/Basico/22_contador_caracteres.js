document.addEventListener("DOMContentLoaded", function(){

    function numeroDeCaracteres(string, caracter){

        let num_car_str = 0;
        for(let i = 0; i < string.length; i ++){
            if(string[i] == caracter){
                num_car_str++; // num_car_str = num_car_str + 1
            }
        }

        return num_car_str;
    }

    // código de prueba
    // console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
    // console.log(numeroDeCaracteres("MMMMM", "m")) // 0
    // console.log(numeroDeCaracteres("eeee", "e")) // 4


});