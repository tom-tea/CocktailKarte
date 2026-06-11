document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('h2');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const nextElement = header.nextElementSibling;
            if (nextElement && nextElement.classList.contains('collapsible')) {
                nextElement.classList.toggle('open');
            }
        });
    });

    // Add star icons to recommended drinks

    // Highlight recommended drinks
    const recommendations = ['Mojito', 'Cuba Libre', 'Pisco Sour', 'Piña Colada'];
    recommendations.forEach(drink => {
        const drinkElements = document.querySelectorAll('h3');
        drinkElements.forEach(drinkElement => {
            if (drinkElement.textContent.includes(drink)) {
                drinkElement.classList.add('recommended');
            }
        });
    });
});