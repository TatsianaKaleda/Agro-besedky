import Swiper from 'swiper/swiper-bundle';

document.querySelectorAll('.galery').forEach(n => {
    let galleryThumbs = new Swiper(n.querySelector('.gallery-thumbs'), {
        spaceBetween: 5,
        slidesPerView: 11,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    let galleryTop = new Swiper(n.querySelector('.gallery-top'), {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});
