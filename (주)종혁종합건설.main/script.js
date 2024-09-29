$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $('header').addClass('st')
    } else{
      $('header').removeClass('st')
    }
  });
  $(".gnb .menu").mouseenter(function(){
    $('header').addClass('on')
  });
  $(".gnb .menu").mouseleave(function(){
    $('header').removeClass('on')
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView : '4',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    scrollBar:{
      el: ".swiper-scrollbar",
      hide: true,
    }
  });

  const $counters = $(".scroll_on");
  
    const exposurePercentage = 100;
    const loop = true; 

    $(window).on('scroll', function() {
        $counters.each(function() {
            const $el = $(this);
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
            
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }
            
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();
});