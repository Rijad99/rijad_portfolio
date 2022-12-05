$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $(".swiper-slide").css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight) + 1;
            
            return opacity;
        }
    });
});

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $(".about").css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight) + 1.2;
            
            return opacity;
        }
    });
});

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $(".services").css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight) + 2.8;
            
            return opacity;
        }
    });
});

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $(".contact").css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight) + 4.5;
            
            return opacity;
        }
    });
});