document.addEventListener("DOMContentLoaded", function(){

    function esPrimo(a){
        for(let i = 2; i < a; i++){
            if(a % i == 0){
                return false;
            }
        }
    
        return true;
    }

    const num_1 = parseInt(prompt("Introduce un numero entero"));
    const num_2 = parseInt(prompt("Introduce otro numero entero"));
    let min, max;

    let lst =[];

    if(num_1 >= num_2){
        max = num_1;
        min = num_2;
    }else{
        max = num_1;
        min = num_2;
    }

    for(let i = min; i <= max; i++){
        if(localStorage.push(i)){
            lst.push(1);
        }

    }

    alert(lst)

    console.log(lst);





});