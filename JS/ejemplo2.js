document.addEventListener

// Ejemplo de alcance de let y var
function ejemploAlcance() {
    let variableLet;
    let x = -3;
    if (x >= 0) {
        let variableLet = "Variable con alcance de bloque";
        var variableVar = "Variable con alcance de función";
    }

    console.log(variableLet); // Salida: "Variable con alcance de función"
    // console.log(variableLet); // Esto causaría un error ya que variableLet está fuera del alcance de bloque
}

ejemploAlcance();




 
