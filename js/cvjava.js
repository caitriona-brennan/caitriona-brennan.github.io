

//change logo 
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.target');
 
    // Callback function to execute when mouse enters and leaves
    const handleMouseEnter = (event) => {
        const image = event.currentTarget.querySelector('img');
        const hoverSrc = event.currentTarget.getAttribute('data-hover-src');
        image.src = hoverSrc;
    };

    const handleMouseLeave = (event) => {
        const image = event.currentTarget.querySelector('img');
        const defaultSrc = event.currentTarget.getAttribute('data-default-src');
        image.src = defaultSrc;
    };

    // Attach event listeners
    targets.forEach(target => {
        target.addEventListener('mouseenter', handleMouseEnter);
        target.addEventListener('mouseleave', handleMouseLeave);
    });
});
