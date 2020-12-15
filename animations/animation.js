$(document).ready(function(){
    console.log($(this).width());
    

    var documentEl = $(document);
    var fadeElem = $(".section");

    documentEl.on("scroll", function(){
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function(){
            var $this = $(this);
            var elemOffsetTop = $this.offset().top;
            if($(document).width() >= 740 && currScrollPos > elemOffsetTop){
                $this.css('opacity', 1-(currScrollPos-elemOffsetTop)/400);
            }
        });
    });
});