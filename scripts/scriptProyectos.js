document.addEventListener('DOMContentLoaded', function() {
    const proyectos = document.querySelectorAll('.objeto-proyecto');

    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseover', function() {
            const descripcion = proyecto.querySelector('.descripcion-proyecto');
            const titulo = proyecto.querySelector('.titulo-proyecto');
            titulo.style.display = 'block';
            descripcion.style.display = 'block';
            descripcion.style.animation = 'animacionAparicion 8s'; // Aplica la animación
        });

        proyecto.addEventListener('mouseout', () => {
            const descripcion = proyecto.querySelector('.descripcion-proyecto');
            const titulo = proyecto.querySelector('.titulo-proyecto');
            titulo.style.display = 'none';
            descripcion.style.display = 'none';
            descripcion.style.animation = ''; // Elimina la animación
        });
    });
});
