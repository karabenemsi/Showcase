$( document ).ready(function() {

  $('#js-nav1').click(function() {
    $('[class*="page-"]').hide('500');
    $('.page-home').show('500');
  });
  $('#js-nav2').click(function() {
    $('[class*="page-"]').hide('500');
    $('.page-second').show('500');
  });
  $('#js-nav3').click(function() {
    $('[class*="page-"]').hide('500');
    $('.page-about').show('500');
  });
  $('#js-nav4').click(function() {
  $('[class*="page-"]').hide('500');
  $('.page-contact').show('500');
});
});
