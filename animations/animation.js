$(document).ready(function(){
    // console.log("I'm ready");
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 1){
    //         $("#banner").css({"opacity" : "0"});
    //     } else{
    //         $("#banner").css({"opacity" : "1"});
    //     }
    // });

    var documentEl = $(document);
    var fadeElem = $(".section");

    documentEl.on("scroll", function(){
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function(){
            var $this = $(this);
            var elemOffsetTop = $this.offset().top;
            if(currScrollPos > elemOffsetTop){
                $this.css('opacity', 1-(currScrollPos-elemOffsetTop)/400);
            }
        });
    });
});