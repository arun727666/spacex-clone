document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    // Change navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    setInterval(() => {
        carouselItems[currentIndex].style.transform = `translateX(-${currentIndex * 100}%)`;
        currentIndex = (currentIndex + 1) % carouselItems.length;
    }, 3000);
});
