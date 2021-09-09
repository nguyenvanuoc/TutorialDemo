$(".nav-toggle").click(function(){
    $(".header .menus-box").toggleClass("show");
    $(".overlay-common").addClass("show");
});
$(".overlay-common").click(function(){
    $(".header .menus-box").removeClass("show");
    $(this).removeClass("show");
});

