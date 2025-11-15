
// Swiper JavaScript

function testimonialAnimation() {

    const swiperTestimonial = new Swiper('.testimonial__swiper', {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: 'auto',
        spaceBetween: 16,
        grabCursor: true,
        speed: 600,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: -90,
            stretch: 0,
            depth: 600,
            modifier: .51,
            slideShadows: false,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

    });
}

testimonialAnimation();

