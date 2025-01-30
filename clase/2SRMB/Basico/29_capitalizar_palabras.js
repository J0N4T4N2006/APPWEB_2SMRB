document.addEventListener("DOMContentLoaded", function(){

    function capitalizar(txt){

        // Poner en mayuscula la primera letra de cada palabra
        let txt_n = "";
        let espacio = false;
        for(let i = 0; i < txt.length; i++){
            if(i == 0 || (espacio == true && txt[i] != " ")){
                txt_n += txt[i].toUpperCase();
                espacio = false;
            }else if(txt[i] == " "){
                espacio = true;
                txt_n += txt[i];
            }else{
                txt_n += txt[i];
            }
        }

        return txt_n;

    }

    console.log(capitalizar("hello        world"));


})