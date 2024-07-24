document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100; // Número de estrellas
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starsContainer.appendChild(star);
    }
});
