$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.clothes-pics').offset().top) {
        $('.clothes-pics figure').each(function() {
            $('.clothes-pics figure').addClass('is-showing');
        });
    };
});