$(document).ready(function(){
    $('.burger').click(function(){
        $('.menu-mobil').toggleClass('curry');
        $('.burger').toggleClass('bag');
        $('.line-burger').toggleClass('color-line');
    });
    $('.slider').bxSlider({
        useCSS: true,
    });
});