document.addEventListener("DOMContentLoaded", function () {
    function calculatePower(base, exponent) {
        let result = 1;

        if (exponent < 0) {
            for (let i = 0; i < -exponent; i++) {
                result *= base;
            }
            return 1 / result; 
        }

        for (let i = 0; i < exponent; i++) {
            result *= base; 
        }

        return result;
    }

    const base = parseFloat(prompt("Ingresa la base:"));
    const exponent = parseInt(prompt("Ingresa el exponente:"));

    if (isNaN(base) || isNaN(exponent)) {
        alert("Por favor, ingresa números válidos.");
    } else {
        const result = calculatePower(base, exponent);
        alert(`${base} elevado a la potencia ${exponent} es ${result}`);
    }
});


