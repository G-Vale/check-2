// SLL ATULIZADOR 

//document.body.innerHTML = '<div id="loading" class="mt-n1 mx-auto m-20 loading "></div>';
//window.onload = function() {
  //setTimeout(function() {
    //window.location = 'https://www.gessodrywallgds.com.br/';
    //document.getElementById('loading').classList.remove('loading');
 // }, 2000);
//};
window.onload = function(){
  setTimeout(function(){
      window.location.href="https://www.gessodrywallgds.com.br";
  }, 1500);
};
$(document).ready(function() {
  $('.loading-screen').fadeIn(1000);
});

$(window).on('load', function() {
  $('.loading-screen').fadeOut(40000);
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
// jQuery Smooth Scroll


// BUSCAR //
function searchBar() {
  $('#searchText').on('keyup', function() {
  let searchString = $(this).val();
  $("main div").each(function(index, value) {
        
    currentName = $(value).text()
    if( currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
      $(value).show();
    } else {
      $(value).hide();
    }
  });
});
};
searchBar();
// BUSCAR //

// WHATSAPP //
$('document').ready(function(){
  
  var wappNumber = 554192435474;
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
// WHATSAPP //

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
// ENDEREÇO MENU NAVA BAR ///

// ENDREÇO NO COMEÇO
$(document).ready(function() {
      $('#rotate').rotaterator({fadeSpeed:1000, pauseSpeed:1000});
});
// ENDREÇO NO COMEÇO

function myTimer() {
  var ending = jQuery("#timer").attr("data-endtime"),
      endTime = new Date(ending);
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (days < "10") {
    days = "0" + days;
  }
  if (days < "1") {
    days = "0";
  }
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (hours < "1") {
    hours = "0";
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (minutes < "1") {
    minutes = "0";
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  if (seconds < "1") {
    seconds = "0";
  }

  $("#timer").html(
    "<span id='days'>" +
    days +
    "<span>Days</span></span>" +
    "<span id='hours'>" +
    hours +
    "<span>Hrs</span></span>" +
    "<span id='minutes'>" +
    minutes +
    "<span>Mins</span></span>" +
    "<span id='seconds'>" +
    seconds +
    "<span>Secs</span></span>"
  );
}

setInterval(function() {
  myTimer();
}, 1000);

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
/* BUSCAR */

// Carousel //
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// Carousel//


 //  cookie hide show
jQuery(".cookie-bar").css("opacity","1");
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 30*24*60*60*1000;
    now.setTime(expireTime);
    if (document.cookie.indexOf("ModalShown=true") < 0) {
        jQuery("#cookie-button").click(function () {
            document.cookie = "ModalShown=true; expires="+now.toGMTString()+";path=/";      
        });
    } 
    else {
        jQuery(".cookie-bar").remove();
    }


    $('.cookie-bar .cookie-bar-inner #cookie-button').click(function(){
        var _this = jQuery(this);
        jQuery(this).closest(".cookie-bar").slideUp();
        var headerHeight = jQuery('header').innerHeight();
        setTimeout(function(){
            _this.closest(".cookie-bar").remove();
        },300);
    });

    //  cookie hide show