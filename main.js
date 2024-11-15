const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let counter = 0;
const size = images[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) counter = -1;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) counter = images.length;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});
