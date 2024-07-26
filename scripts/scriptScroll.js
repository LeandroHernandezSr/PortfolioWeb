document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    function applyStyles() {
        if (window.innerWidth <= 767) {
            body.style.overflowY = 'hidden';  
        } else {
            body.style.overflowY = ''; 
        }
    }

    applyStyles();

    window.addEventListener('resize', applyStyles);
});
