document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    function applyStyles() {
        if (window.innerWidth <= 767) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = ''; 
        }
    }

    applyStyles();

    window.addEventListener('resize', applyStyles);
});
