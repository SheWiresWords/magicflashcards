//home page carousel 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateCarousel(){
    const carouselSlide = document.getElementById('carouselSlide');
    const indicators = document.querySelectorAll('.indicator');
    
    if(carouselSlide){
        carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    indicators.forEach((indicator, index) =>{
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function(){
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const indicators = document.querySelectorAll('.indicator');
    
    if(nextBtn) nextBtn.addEventListener('click', nextSlide);
    if(prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) =>{
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    //automatically move thru carousel
    setInterval(nextSlide, 4000);
});