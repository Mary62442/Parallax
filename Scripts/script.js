$(window).scroll(() => {

    let scrolled = $(window).scrollTop();
    let firstSec = document.getElementById("first-sec");
    let firstSecScroll = firstSec.scrollHeight;
    if (scrolled < firstSecScroll) $('.background').css('z-index', '-1');
    else $('.background').css('z-index', '-3');
    $('.background').css('top', -(scrolled * 0.1) + 'px');
    $('.background1').css('top', -(scrolled * 0.1) + 'px');

});

