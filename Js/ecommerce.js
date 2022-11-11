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