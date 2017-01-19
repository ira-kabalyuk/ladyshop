
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
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },

            {
              breakpoint: 992,
              settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },           

             {
              breakpoint: 568,
              settings: {
                arrows: true,
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
      asNavFor: '.news-slider-nav',

      responsive: [           
            
            {
              breakpoint: 992,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                //asNavFor: false,
                //dots: true,
              }
            }
        ]
    });

    $('.news-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.news-slider-for',
      dots: false,      
      focusOnSelect: true,
      arrows: false, 
      vertical: false,    
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
    $('nav ul').toggleClass("showing");

  });

   $(".mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".mobile-menu").toggleClass("is-open");
    }); 

  //nav end 

  //popup  cart button

   $(".delete-link").click(function( e ) {       
       $(this).parents(".modal-cart-block").addClass("is-close");
    });

  //popup end 

  if ($('html').width() < 1025) {

    $(document).ready(function() {
    $('#fullpage').fullpage({ 
        //Scrolling
        
        scrollHorizontally: false, 
       
      });   

    });
     
}

$("#more_button").click(function( e ) {
      e.stopPropagation();
      $(".more-block").toggleClass("is-visible");      
  });


 $("#trigger").click(function( e ) {
      e.stopPropagation();
      $(".more-block").toggleClass("is-visible");
      $(".slick-prev").toggleClass("is-hidden");
      $(".slick-next").toggleClass("is-hidden");
  });

  $('html').smoothScroll(600);

  $('.pointer-button').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSectionDown(); 

   });

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

    $(".size-block li").click(function( e ) {        
       //$(".size-block li").removeClass("size-active")
        $(this).toggleClass("size-active");
       
    });     

});


 







