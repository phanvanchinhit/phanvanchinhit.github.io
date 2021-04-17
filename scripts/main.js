// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

$(document).ready(function(){
    $(".menu-toggle a").click(function(){
        $(".menu").slideToggle(700);
    });
});