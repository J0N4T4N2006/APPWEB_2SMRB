document.addEventListener("DOMContentLoaded", function () {
    function celsius_fahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function fahrenheit_celsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    const conversionType = prompt(
        "¿Qué tipo de conversión deseas realizar?\n" +
        "1: Celsius a Fahrenheit\n" +
        "2: Fahrenheit a Celsius"
    );

    if (conversionType !== "1" && conversionType !== "2") {
        alert("Por favor, ingresa una opción válida (1 o 2).");
    } else {
        const temperature = parseFloat(prompt("Ingresa la temperatura que deseas convertir:"));

        if (isNaN(temperature)) {
            alert("Por favor, ingresa un valor numérico válido para la temperatura.");
        } else {
            let result;
            if (conversionType === "1") {
                result = celsius_fahrenheit(temperature);
                alert(`${temperature} grados Celsius equivalen a ${result.toFixed(2)} grados Fahrenheit.`);
            } else if (conversionType === "2") {
                result = fahrenheit_celsius(temperature);
                alert(`${temperature} grados Fahrenheit equivalen a ${result.toFixed(2)} grados Celsius.`);
            }
        }
    }
});