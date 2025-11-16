





// Animations
function lazyLoading() {
    let allImg = document.querySelectorAll("img");

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(img);

                // img.src = img.getAttribute("data-src");
            }
        });
    }, {
        root: null,
        threshold: 0.3
    });

    allImg.forEach(function (img) {
        observer.observe(img)
    });
}

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

function smoothScrolling() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
}

// AnimationCalling
// lazyLoading();
testimonialAnimation();
// smoothScrolling();

