document.addEventListener("DOMContentLoaded", function(){

    const peso = parseFloat(prompt("Introduce tu peso en kg"));
    const altura = parseFloat(prompt("Introduce tu altura en metros"));
    const imc = peso/Math.pow(altura,2);
    let clasificacion;

    if(imc < 18.5){
        clasificacion="Bajo peso";
    }else if(imc >= 18.5 && imc <= 24.9){
        clasificacion = "Peso normal";
    }else if(imc >= 25 && imc < 30){
        clasificacion = "Sobrepeso";
    }else{
        clasificacion ="Obesidad";
    }

    /*Mostrar informacion al usuario*/
    alert("IMC: " + imc.toFixed(2) + ". Clasificación: " + clasificacion);




});