document.addEventListener("DOMContentLoaded", function () {
    function findLargestNumber(numbers) {
        let largest = numbers[0]; 

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i]; 
            }
        }

        return largest;
    }

    const count = parseInt(prompt("Ingresa la cantidad de números que quieres introducir:"));

    if (isNaN(count) || count <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
    } else {
        const numbers = [];

        for (let i = 0; i < count; i++) {
            const number = parseFloat(prompt(`Ingresa el número ${i + 1}:`));

            if (isNaN(number)) {
                alert("Por favor, ingresa un número válido.");
                i--; 
            } else {
                numbers.push(number); 
            }
        }

        const largestNumber = findLargestNumber(numbers);

        alert(`El número más grande es: ${largestNumber}`);
    }
});
