$(document).ready(function(){
    //smooth scroll
    $("a[href^='#']").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
      });
  //modal
    $('[data-modal=discounter]').on('click', function(){
      $('.overlay, #discounter').fadeIn();
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #discounter, #thank').fadeOut();
    });
});