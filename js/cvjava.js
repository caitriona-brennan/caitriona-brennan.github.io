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

//carousel
let carousels = {};

function showSlide(carouselId, index) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);
    if (!carousels[carouselId]) {
        carousels[carouselId] = { currentIndex: 0 };
    }
    if (index >= slides.length) {
        carousels[carouselId].currentIndex = 0;
    } else if (index < 0) {
        carousels[carouselId].currentIndex = slides.length - 1;
    } else {
        carousels[carouselId].currentIndex = index;
    }
    const offset = -carousels[carouselId].currentIndex * 100;
    document.querySelector(`#${carouselId} .carousel-inner`).style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselId) {
    showSlide(carouselId, carousels[carouselId].currentIndex + 1);
}

function prevSlide(carouselId) {
    showSlide(carouselId, carousels[carouselId].currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide('carousel1', 0);
    showSlide('carousel2', 0);
    showSlide('carousel3', 0);
});
