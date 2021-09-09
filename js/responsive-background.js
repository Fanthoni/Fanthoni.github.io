$(document).ready(function(){
    const screenWidth = $(window).width();
    const screenHeight = $(window).height();

    $("#landing-background").css("width", screenWidth);
    $("#landing-background").css("height", screenHeight);
    $("#landing-page").css("height", screenHeight - 125);
});