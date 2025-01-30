document.addEventListener("DOMContentLoaded", function(){

    let removerCeros = (array) =>{

        let array_n = [];
        for(let i = 0; i < array.length; i++){
            if(array[i] != 0){
                array_n.push(array[i]); 
            }
        }

        return array_n;
    }

    // código de prueba
    console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
    console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
    console.log(removerCeros([0, 0, 0])) // []



});