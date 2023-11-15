var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200 : {
            slidesPerView: 6,
            spaceBetween: 20,
        }

    },
});