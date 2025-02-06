//EJ7

function toggleClase() {
    const encabezado = document.querySelector('header');
    encabezado.classList.toggle('activo')
    
    document.addEventListener('DOMContentLoaded', function()){
        const titular = document.querySelector('h1')
        titular.addEventListener('click', toggleClase);
    } 
    
};

//EJ8