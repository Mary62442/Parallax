let win = $(window);
let lastY = win.scrollTop();

win.scroll(() => {

    let scrolled = win.scrollTop();
    let firstSec = document.getElementById("first-sec");
    let firstSecScroll = firstSec.scrollHeight;

    if (scrolled < firstSecScroll) {
     	$('.background').css('z-index', '-1');
 	}
    else {    
     	$('.background').css('z-index', '-3');
	}

    $('.background').css('top', -(scrolled * 0.1) + 'px');
    $('.background1').css('top', -(scrolled * 0.1) + 'px');

    let y = (scrolled > lastY) ? 'down' :((scrolled===lastY)? 'none':'up');
    

	if (y === 'down') {
		$('#navbar').slideUp(300);
	}
		
    else if (y === 'up') {
    	$('#navbar').slideDown(300);
    }
    
    lastY = scrolled; 
    
});


