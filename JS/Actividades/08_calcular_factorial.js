document.addEventListener("DOMContentLoaded", function () {
    function calcular_factorial(number) {
        let result = 1;

        for (let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    }

    const userInput = prompt("Ingresa un número entero no negativo para calcular su factorial:");

    const number = parseInt(userInput);

    if (isNaN(number) || number < 0) {
        alert("Ingresa un número entero no negativo: ");
    } else {
        const factorial = calcular_factorial(number);
        alert(`El factorial de ${number} es ${factorial}.`);
    }
});
