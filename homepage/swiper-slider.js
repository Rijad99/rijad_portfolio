var modernSlider = new Swiper('.swiper-container-first', {
    slidesPerView: "auto",
    spaceBetween: 130,
    centeredSlides: true,
    breakpoints: {
        600: {
            spaceBetween: 100
        },
        800: {
            spaceBetween: 100
        },
        1024: {
            spaceBetween: 110
        },
        1280: {
            spaceBetween: 120
        },
        1440: {
            spaceBetween: 130
        },
        1600: {
            spaceBetween: 140
        },
    }
});



modernSlider.on("slideChange", function() {

    TweenMax.to(".swiper-slide-transition", 1, {
        scale: .8,
    })

    TweenMax.to(".swiper-slide-unactive .image-info", 1.8, {
        opacity: 0,
        y: "50px",
        ease: Power4.easeOut,
    })

    TweenMax.to(".swiper-slide-active .image-info", 1.8, {
        opacity: 0,
        y: "50px",
        ease: Power4.easeOut,
    })
});



modernSlider.on("slideChangeTransitionEnd", function() {

    TweenMax.to(".swiper-slide-active", 1, {
        scale: 1,
        ease: Power4.easeOut,
    })

    TweenMax.to(".swiper-slide-active .image-info", 1.8, {
        opacity: 1,
        y: "-25px",
        ease: Power4.easeOut,
    })
});

TweenMax.to(".swiper-slide-active", 0, {
    scale: 1,
    ease: Power4.easeOut,
})

TweenMax.to(".swiper-slide-unactive", 0, {
    scale: .8,
})

TweenMax.to(".swiper-slide-unactive .image-info", 0, {
    opacity: 0,
    y: "50px",
    ease: Power4.easeOut,
})



let secondSlider = new Swiper('.swiper-container-second', {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: '.swiper-pagination'
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

let thirdSlider = new Swiper('.swiper-container-third', {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: '.swiper-pagination'
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});