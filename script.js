function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const burger = document.querySelector('.burger');

    // Toggle the 'open' class on the nav links
    navLinks.classList.toggle('open');

    // Toggle the 'toggle' class on the burger for the animation
    burger.classList.toggle('toggle');
}

const swiper = new Swiper('.swiper-container', {
    loop: true, // Enables infinite loop
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Auto slide every 3 seconds
        disableOnInteraction: false, 
    },
    slidesPerView: 3, 
    spaceBetween: 10, 
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 1, // Show 1 slide per view on mobile
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3, // Show 3 slides per view on desktop
        },
    }
});




// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
s