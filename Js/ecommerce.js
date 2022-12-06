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

$('document').ready(function(){
  
  var wappNumber = 5541992907250;
  var wappMessage = 'Olá! Tudo bem? quero falar com um atendente';
  var wappBackground = '#00e676';
  var wappIconColor = '#fff';
  var wappIconSize = 46;
  var wappIconPadding = 15;
  var wappPositionRight = 10;
  var wappPositionBottom = 30;
  
  document.getElementById("wapp-button").insertAdjacentHTML('afterend', "<a id='wapp-link' href='#' target='_blank' nofollower noopenner><svg id='wapp-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'/></svg></a>");
  
  document.getElementById("wapp-button").style.overflow = 'hidden';
  document.getElementById("wapp-link").href = 'https://wa.me/' + wappNumber + '?text=' + encodeURI(wappMessage);
  document.getElementById("wapp-link").style.backgroundColor = wappBackground;
  document.getElementById("wapp-link").style.padding = wappIconSize * wappIconPadding / 100 + 'px';
  document.getElementById("wapp-icon").style.width = wappIconSize * (100 - wappIconPadding * 2) / 100 + 'px';
  document.getElementById("wapp-icon").style.height = wappIconSize * (100 - wappIconPadding * 2) / 100 + 'px';
  document.getElementById("wapp-icon").style.fill = wappIconColor;
  document.getElementById("wapp-link").style.position = 'fixed';
  document.getElementById("wapp-link").style.right = wappPositionRight + 'px';
  document.getElementById("wapp-link").style.bottom = wappPositionBottom + 'px';
  document.getElementById("wapp-link").style.borderRadius = '999px';
  document.getElementById("wapp-link").style.lineHeight = 0;
  document.getElementById("wapp-button").style.visibility = 'visible';
   
  return false;
});

/* BUSCAR */
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
})


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

// ENDEREÇO MENU NAVA BAR ///
(function($){
  $.fn.extend({ 
      rotaterator: function(options) {

          var defaults = {
              fadeSpeed: 500,
              pauseSpeed: 100,
      child:null
          };
           
          var options = $.extend(defaults, options);
       
          return this.each(function() {
                var o =options;
                var obj = $(this);                
                var items = $(obj.children(), obj);
        items.each(function() {$(this).hide();})
        if(!o.child){var next = $(obj).children(':first');
        }else{var next = o.child;
        }
        $(next).fadeIn(o.fadeSpeed, function() {
          $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
            var next = $(this).next();
            if (next.length == 0){
                next = $(obj).children(':first');
            }
            $(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
          })
        });
          });
      }
  });
})(jQuery);

$(document).ready(function() {
      $('#rotate').rotaterator({fadeSpeed:1000, pauseSpeed:1000});
});

