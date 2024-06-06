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

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
