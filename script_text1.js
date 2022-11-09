$(function(){
    let header = $("#header");
    let scrollPos = $(window).scrollTop();
    CheckScroll(scrollPos);
    $(window).on("scroll resize", function(){
        scrollPos = $(this).scrollTop();
        CheckScroll(scrollPos);
        
    });

    function CheckScroll(){
        if (scrollPos > 0){
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
});