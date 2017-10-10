var header = $('.header');

$(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 150) {
            $('.header').stop(true, true).fadeOut(10000);
        } else {
            $('.header').stop(true, true).fadeIn(10000);
        }
});
