document.addEventListener('DOMContentLoaded', () => {
    // Select the input field
    const searchInput = document.querySelector('input');

    // Add an event listener for focus
    searchInput.addEventListener('focus', () => {
        searchInput.style.border = '2px solid #ffcc00';
        searchInput.style.boxShadow = '0 0 5px rgba(255, 204, 0, 0.5)';
    });

    // Add an event listener for blur
    searchInput.addEventListener('blur', () => {
        searchInput.style.border = 'none';
        searchInput.style.boxShadow = 'none';
    });

    // Simple animation for main image
    const mainImage = document.querySelector('main img');
    mainImage.style.opacity = 0;
    mainImage.style.transition = 'opacity 1s';

    setTimeout(() => {
        mainImage.style.opacity = 1;
    }, 500);
});
