document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    function applyStyles() {
        if (window.innerWidth <= 767) {
            body.style.overflowX = 'hidden';  
        } else {
            body.style.overflowX = ''; 
        }
    }

    applyStyles();

    window.addEventListener('resize', applyStyles);
});
