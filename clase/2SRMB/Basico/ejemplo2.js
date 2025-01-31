
document.addEventListener("DOMContentLoaded", function(){

    // Ejemplo de alcance de let y var
    function ejemploAlcance() {
        let variableLet;
        let x = -3;
        if (x >= 0) {
            variableLet = "Es True";
        }else{
            variableLet = "Es False";
        }

        // console.log(variableVar); // Salida: "Variable con alcance de función"
        console.log(variableLet); // Esto causaría un error ya que variableLet está fuera del alcance de bloque
    }

    ejemploAlcance();
});
