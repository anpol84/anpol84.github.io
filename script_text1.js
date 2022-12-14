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
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("show");
        $("html").animate({
            scrollTop: elementOffset - 80
        }, 700);
    });

    $("#period").on("click", function(event){
        event.preventDefault();
        $("#period_item").toggleClass("show");

    });
    let counter = 0;
    let check = document.getElementById("nav-toggle");
    check.onclick = function(){
        counter++;
        if (counter == 2){
            let li = $("li");
            li.addClass("not_animation");
        }
    }
});