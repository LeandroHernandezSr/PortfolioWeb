document.addEventListener('DOMContentLoaded', () => {
    const botonNav = document.querySelector('.contenedor-flecha');
    const contenedorNav = document.querySelector('.contenedor-navbar');
    const iconoFlecha = document.querySelector('.flecha-abajo');
    const iconoFlechaArriba = document.querySelector('.flecha-arriba');

    botonNav.addEventListener('click', () => {
        if (contenedorNav.classList.contains('show')) {
            contenedorNav.classList.remove('show');
            iconoFlecha.style.display = 'flex';
            iconoFlechaArriba.style.display = 'none';
        } else {
            contenedorNav.classList.add('show');
            iconoFlecha.style.display = 'none';
            iconoFlechaArriba.style.display = 'flex';
        }
    });
});
