
const gastos_alojamiento = parseFloat(prompt("Introduce los gastos de alojamiento de tu viaje"));
const gastos_alimentacion = parseFloat(prompt("Introduce los gastos de alimentacion de tu viaje"));
const gastos_entretenimiento = parseFloat(prompt("Introduce los gastos de entretenimiento de tu viaje"));
const gastos_totales = gastos_alojamiento + gastos_alimentacion + gastos_entretenimiento;
alert("El coste total de tu viaje es " + gastos_totales)

