$(function(){
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    CheckScroll(scrollPos, introH);
    $(window).on("scroll resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        CheckScroll(scrollPos, introH);
        
    });

    function CheckScroll(){
        if (scrollPos > introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }

    let nav = $("#nav");
    $("#navToggle").on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("show");
        
        $("html").animate({
            scrollTop: elementOffset
        }, 700);
    });
});