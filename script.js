// Obtenemos el elemento del botón con el id "button1" y lo almacenamos en la variable "button1"
const button1 = document.querySelector('#button1');

// Obtenemos el elemento del modal con la clase "modal" y lo almacenamos en la variable "modal"
const modal = document.querySelector('.modal');

// Obtenemos el elemento del botón de cerrar modal con la clase "modal_content-close" y lo almacenamos en la variable "close"
const close = document.querySelector('.modal_content-close');

// Agregamos un event listener al botón "button1" para que cuando se haga clic en él, se ejecute la función de flecha
button1.addEventListener('click', () => {
    // Removemos la clase "hidden" del modal para hacerlo visible
    modal.classList.remove('hidden');

    // Agregamos la clase "visible" al modal para asegurarnos de que sea visible
    modal.classList.add('visible');
});

// Agregamos un event listener al botón de cerrar modal para que cuando se haga clic en él, se ejecute la función de flecha
close.addEventListener('click', () => {
    // Removemos la clase "visible" del modal para ocultarlo
    modal.classList.remove('visible');

    // Agregamos la clase "hidden" al modal para asegurarnos de que esté oculto
    modal.classList.add('hidden');
});
