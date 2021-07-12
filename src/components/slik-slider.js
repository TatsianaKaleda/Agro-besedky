$('.reviews-content').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: '<div class="reviews-control-prev"><svg class="bi bi-chevron-left" width="50" height="36" viewBox="0 0 20 20" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg></div>',
    nextArrow: '<div class="reviews-control-next"><svg class="bi bi-chevron-right" width="50" height="36" viewBox="0 0 20 20" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg></div>',
});