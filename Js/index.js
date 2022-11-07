var wide1 = $('.scroll-container')[0].offsetWidth;
var width1 = wide1;
var count1 = $('.scroll-container .scroll-item').length;
var next= $('.next')[0];
$(next).click(function(){
 
if($(".count-indicator:first-child").hasClass('active')){
  $(".back").removeClass('d-none');
  }
   $(".count-indicator.active").next().addClass('active');
  $(".count-indicator.active").prev().removeClass('active');
   if($(".count-indicator:last-child").hasClass('active')){
  $(this).addClass('d-none');
}else{$(this).removeClass('d-none');}
    var container = $('.scroll-container')[0];
    $(container).animate( { scrollLeft: '+='+width1 }, 500);
}); 
var back = $('.back')[0];
$(back).click(function(){
  if($(".count-indicator:last-child").hasClass('active')){
  $(".next").removeClass('d-none');
  }
 $(".count-indicator.active").prev().addClass('active');
  $(".count-indicator.active").next().removeClass('active');
    if($("span:first-child").hasClass('active')){
  $(this).addClass('d-none');
}else{ $(this).removeClass('d-none');}
    var container = $('.scroll-container')[0];
    $(container).animate( { scrollLeft: '-='+width1 }, 500);
});
$count2 = $( ".scroll-item" );
for (i = 0; i < $count2.length; i=i+4) {
  $(".indicators" ).append('<span class="count-indicator"></span>');
}
$(".count-indicator:first-child" ).addClass('active');


