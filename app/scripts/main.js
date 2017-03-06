
console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

    $('.slider').slick({
      accessibility: false,
      infinite: true,      
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },
            {
              breakpoint: 980,
              settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',

      responsive: [           
            
            {
              breakpoint: 992,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                //asNavFor: false,
                dots: true,
              }
            }
        ]
    });

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,      
      focusOnSelect: true,
      arrows: true,
      vertical: true,
    });


    $('.page-slider').slick({
      accessibility: false,
      infinite: true,      
      arrows: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
            {
              breakpoint: 1025,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },

            {
              breakpoint: 992,
              settings: { 
                dots: true,               
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },           

             {
              breakpoint: 568,
              settings: { 
                dots: true,              
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      
    });

   $('.news-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.news-slider-nav'
    });

    $('.news-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.news-slider-for',      
      focusOnSelect: true,
       arrows: false,
    });
            

     if ($('html').width() > 1025) {

       $('.topfly').addClass("is-hidden").viewportChecker({
          classToAdd: 'visible animated bounceInDown',
          offset: 100
      });

      $('.topfly').addClass("is-hidden").viewportChecker({
          classToAdd: 'visible animated bounceInDown',
          offset: 100
      });  

      $('.leftfly').addClass("is-hidden").viewportChecker({
          classToAdd: 'visible animated bounceInLeft',
          offset: 100
      });

      $('.rightfly').addClass("is-hidden").viewportChecker({
          classToAdd: 'visible animated bounceInRight',
          offset: 100
      });    

   }

   $(".input-head").click(function() {        
          $(".input-list").toggleClass("in-visible");
      });

      $('html').smoothScroll(300);

   //nav

   $('.mobile-menu').click( function() {
    if($('body').hasClass('menu-open')) {
      initFullpagePlugin()
    } else {
      destroyFullpagePlugin();
    }

    $('nav ul').toggleClass("showing");
    $('body').toggleClass('menu-open');
  });

   $(".mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".mobile-menu").toggleClass("is-open");
    }); 

  //nav end 

  

  //popup  cart button

   $(".delete-link").click(function( e ) {       
       $(this).parents( ".modal-cart-block" ).fadeOut( "slow", function() {
    // Анимация завершена.
      });
    });   

  //popup end 

  initFullpagePlugin();

  function initFullpagePlugin() {
    if ($('html').width() < 1025) {
      $('#fullpage').fullpage({ 
          //Scrolling
          scrollHorizontally: false, 
        });  
    }
  }

  function destroyFullpagePlugin() {
    if($.fn.fullpage && $.fn.fullpage.destroy) { 
      $.fn.fullpage.destroy('all');
    }
  }

$("#more_button").click(function( e ) {
      e.stopPropagation();
      $(".more-block").slideToggle(600);
     $(".more-block").toggleClass("is-visible");
  });


 $("#trigger").click(function( e ) {
      e.stopPropagation();
      $(".more-block").toggleClass("is-visible");
      $(".slick-prev").toggleClass("is-hidden");
      $(".slick-next").toggleClass("is-hidden");
  });

  $('html').smoothScroll(600);

 /* $('.pointer-button').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSectionDown(); 

   });*/

  $('.select').niceSelect();

     $(".tab-select .option").click(function( e ) {        
       $(".tab-select .option").removeClass("option-active")
        $(this).addClass("option-active");
       /* $(this).find('a').click();*/
    });   

   $(".left-column .nice-select").click(function() {        
        if($(this).hasClass('open')) {
         $(".mask").removeClass("mask-visible");        
      } else {
        $(".mask").addClass("mask-visible");                    
      }

    });
  

     $(".size-list li").click(function( e ) {        
       $(".size-list li").removeClass("size-active")
        $(this).addClass("size-active");
       
    });  

    $(".paging li").click(function( e ) {        
       $(".paging li").removeClass("page-active")
        $(this).addClass("page-active");
       
    });

    $(".nav-bar li").click(function( e ) {        
       $(".nav-bar li").removeClass("menu-active")
        $(this).addClass("menu-active");
       
    }); 

    $(".selection").click(function( e ) {        
       $(".selection").removeClass("menu-active")
        $(this).addClass("menu-active");
       
    }); 

    $(".size-block li").click(function( e ) {        
       //$(".size-block li").removeClass("size-active")
        $(this).toggleClass("size-active");
       
    });

    if(navigator.userAgent.match(/iPhone/i)) {
    $('body').addClass('device-iphone');
  } 

   //product-filter

  $('.right-btn').click(function() {
   var countElem = $(this).parent().find('.counter');
      var count = parseInt(countElem.text()) + 1;      
      countElem.text(count);      
    });
  
    $('.left-btn').click(function() {
   var countElem = $(this).parent().find('.counter');
      var count = parseInt(countElem.text()) - 1;
      if(count < 1) {
        return;
        }
      countElem.text(count);        
    });

  //product tab    

  /* $('#myModal').on('shown.bs.modal', function (e) {
    $("html").addClass("document-visible");
  })

   $('#myModal').on('hidden.bs.modal', function (e) {
    $("html").removeClass("document-visible");
  })*/

//эффекты появления в каталоге

  function onImgload(){
    $(this).parents('.catalog-main-list .catalog-item').addClass('loaded');
  }

  $(".catalog-main-list .catalog-item img").load(onImgload).each(function() {
    if(this.complete) $(this).load();
  });

  $(window).load(function(){
   $(".catalog-main-list .catalog-item").each(function(){
    if(!$(this).hasClass('loaded')) {
     $(this).addClass('loaded');
    }
   })
  })

  //dots  

  /*var sliced = text.slice(0,10);
  if (sliced.length < $('.news-text')text.length) {
  sliced += '...';
  }*/

  //dots


 /*$(".news h2").shorten({
      "showChars" : 60,     
  });
    

 $(".news-text").shorten({
      "showChars" : 170,     
  });*/

//по клику на кнопку появляется окошечко добавления товара

/*$(".product-button").click(function( e ) {
      $(".cart-window").removeClass("win-visible")
        setTimeout(function(){
          $(".cart-window").addClass("win-visible");
        })
    });*/



});




 








