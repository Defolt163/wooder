/* $('body').text('new text') */
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

    $('[data-modal=innovative]').on('click', function(){
      $('.overlay, #innovative').fadeIn();
    });

    $('[data-modal=skills]').on('click', function(){
      $('.overlay, #skills').fadeIn();
    });

    $('[data-modal=quality]').on('click', function(){
      $('.overlay, #quality').fadeIn();
    });
  
    $('.modal__close').on('click', function(){
      $('.overlay, #discounter, #innovative, #skills, #quality').fadeOut();
      var leg=$('#ytplayer').attr("src");
      $('#ytplayer, #innovative, #skills, #quality').attr("src",leg);
    });
});