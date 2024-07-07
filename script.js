let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;
    
    if (n >= totalSlides) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = totalSlides - 1;
    }

    const offset = -slideIndex * 100;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${offset}%)`;
}