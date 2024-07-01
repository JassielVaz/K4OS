document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    let timer;

    const showImage = (index) => {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    const startCarousel = () => {
        timer = setInterval(nextSlide, 3000);
    };

    const stopCarousel = () => {
        clearInterval(timer);
    };

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);

    startCarousel();
});
