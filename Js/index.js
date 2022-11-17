
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