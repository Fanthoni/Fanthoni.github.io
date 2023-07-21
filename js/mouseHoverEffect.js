$(document).mousemove(function(event) {
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    
    const mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    const mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('html').css('background-image', 'radial-gradient( at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #1b3138, #081D24)');
});