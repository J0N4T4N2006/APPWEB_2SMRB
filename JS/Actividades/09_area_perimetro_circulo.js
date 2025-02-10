document.addEventListener("DOMContentLoaded", function () {
    function calculateArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    function calculatePerimeter(radius) {
        return 2 * Math.PI * radius;
    }

    const userInput = prompt("Ingresa el radio del círculo:");

    const radius = parseFloat(userInput);

    if (isNaN(radius) || radius <= 0) {
        alert("Por favor, ingresa un número positivo válido para el radio.");
    } else {
        const area = calculateArea(radius);
        const perimeter = calculatePerimeter(radius);

        alert(`Para un círculo con radio ${radius}:
        - El área es ${area.toFixed(2)}
        - El perímetro es ${perimeter.toFixed(2)}`);
    }
});
