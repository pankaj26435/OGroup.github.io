// Fixed Header on Scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".fixed-header").addClass("sticky");
    } else {
        $(".fixed-header").removeClass("sticky");
    }
});
// Fixed Header on Scroll

// Add Active Class for offcanvas
$(".burger-menu").click(function(){  
  $(".offcanvas").addClass("active");
  $(".offcanvas-close").addClass("active");
  $(".offcanvas-wrapper").addClass("active");
  
});

// remove active Class for offcanvas
$(".offcanvas-close").click(function(){  
  $(".offcanvas-close").removeClass("active");
  $(".offcanvas-wrapper").removeClass("active");  
});


$(document).ready(function() {
  $( ".offcanvas-close" ).click(function() {
    $( ".offcanvas" ).addClass( "active", callback() );  // Add Class 
  });

  function callback() {
  setTimeout(function() {
    $( ".offcanvas" ).removeClass( "active" );  // Remove Class after delay of 2sec
      }, 1000 );
    }
});

// Counter

jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
});

// Testimonial slider
$(document).ready(function(){
  $('.slick-slider').slick({    
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,    
    dots:false,
    prevArrow: '.testi-prev',
    nextArrow: '.testi-next',
    autoplaySpeed: 4000,
    responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '.mob-testi-prev',
                            nextArrow: '.mob-testi-next',
                        }
                    }
                ]
  });
});