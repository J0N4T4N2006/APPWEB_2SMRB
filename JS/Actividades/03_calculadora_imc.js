document.addEventListener("DOMContentLoaded", function() {
    const peso = parseFloat(prompt("Introduce tu peso en kilogramos (kg):"));
    const altura = parseFloat(prompt("Introduce tu altura en metros (m):"));
    const imc = peso / (altura * altura); // Corrige la fórmula del IMC: peso dividido entre altura al cuadrado.
  
    if (imc < 18.5) {
        alert("Tu IMC indica bajo peso.");
    } else if (imc >= 18.5 && imc < 24.9) {
        alert("Tu IMC está en un rango normal.");
    } else if (imc >= 25 && imc < 30) {
        alert("Tu IMC indica sobrepeso.");
    } else {
        alert("Tu IMC indica obesidad.");
    }
  });
