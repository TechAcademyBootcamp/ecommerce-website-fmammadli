$(document).ready(function(){
    $('.demo').slick({
      accessibility:true,
      arrows:true,
  
      prevArrow: '<button type="button" data-role="none" class="slick-prev x">Previous</button>',
  
  
      nextArrow: '<button type="button" data-role="none" class="slick-next x">Next</button>',
  
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
  });
  
  $('.demo').slick({
  accessibility: true,
  adaptiveHeight: false,
  appendArrows: $(element),
  appendDots: $(element),
  arrows: true,
  asNavFor: null,
  
  prevArrow: '<button type="button" data-role="none" class="slick-prev x">Previous</button>',
  
  
  nextArrow: '<button type="button" data-role="none" class="slick-next x">Next</button>',
  });