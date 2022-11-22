// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

$(document).ready(function(){

$('.radio-group .radio').click(function(){
    $('.radio').addClass('gray');
    $(this).removeClass('gray');
});

$('.plus-minus .plus').click(function(){
    var count = $(this).parent().prev().text();
    $(this).parent().prev().html(Number(count) + 1);
});

$('.plus-minus .minus').click(function(){
    var count = $(this).parent().prev().text();
    $(this).parent().prev().html(Number(count) - 1);
});

});

var modalConfirm = function(callback){
  
  $("#btn-confirm").on("click", function(){
    $("#mi-modal").modal('show');
  });

  $("#modal-btn-si").on("click", function(){
    callback(true);
    $("#mi-modal").modal('hide');
  });
  
  $("#modal-btn-no").on("click", function(){
    callback(false);
    $("#mi-modal").modal('hide');
  });
};

modalConfirm(function(confirm){
  if(confirm){
    //Acciones si el usuario confirma
    $("#result").html("CONFIRMADO");
  }else{
    //Acciones si el usuario no confirma
    $("#result").html("NO CONFIRMADO");
  }
});

// jQuery Smooth Scroll
$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

$(document).ready(function(){

  $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
$('#scrollToTop').fadeIn();
} else {
$('#scrollToTop').fadeOut();
}
  });

  $('#scrollToTop').click(function(){
$('html, body').animate({scrollTop : 0},800);
return false;
  }); 
});

$(document).ready(function () {

  // navSearch show/hide
  function navSearch() {
    $('.nav-search').on('click', function () {
      $('.search-block').fadeIn(350);
    });
    $('.search-close').on('click', function () {
      $('.search-block').fadeOut(350);
    });
  }
  navSearch();

  // navbarDropdown
  function navbarDropdown() {
    if ($(window).width() < 992) {
      $('.site-navigation .dropdown-toggle').on('click', function () {
        $(this).siblings('.dropdown-menu').animate({
          height: 'toggle'
        }, 300);
      });

      var navbarHeight = $('.site-navigation').outerHeight();
      $('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
    }
  }
  navbarDropdown();


  // back to top
  function backToTop() {
    $('#back-to-top').on('click', function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }
  backToTop();


  // banner-carousel
  function bannerCarouselOne() {
    $('.banner-carousel.banner-carousel-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      speed: 600,
      arrows: true,
      prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
    });
    $('.banner-carousel.banner-carousel-1').slickAnimation();
  }
  bannerCarouselOne();


  // banner Carousel Two
  function bannerCarouselTwo() {
    $('.banner-carousel.banner-carousel-2').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      speed: 600,
      arrows: true,
      prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
    });
  }
  bannerCarouselTwo();


  // pageSlider
  function pageSlider() {
    $('.page-slider').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      speed: 600,
      arrows: true,
      prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
    });
  }
  pageSlider();


  // Shuffle js filter and masonry
  function projectShuffle() {
    if ($('.shuffle-wrapper').length !== 0) {
      var Shuffle = window.Shuffle;
      var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        sizer: '.shuffle-sizer',
        buffer: 1
      });
      $('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
          myShuffle.filter(input.value);
        }
      });
      $('.shuffle-btn-group label').on('click', function () {
        $('.shuffle-btn-group label').removeClass('active');
        $(this).addClass('active');
      });
    }
  }
  projectShuffle();


  // testimonial carousel
  function testimonialCarousel() {
    $('.testimonial-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 600,
      arrows: false
    });
  }
  testimonialCarousel();


  // team carousel
  function teamCarousel() {
    $('.team-slide').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: true,
      prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  teamCarousel();


  // media popup
  function mediaPopup() {
    $('.gallery-popup').colorbox({
      rel: 'gallery-popup',
      transition: 'slideshow',
      innerHeight: '500'
    });
    $('.popup').colorbox({
      iframe: true,
      innerWidth: 600,
      innerHeight: 400
    });
  }
  mediaPopup();

});