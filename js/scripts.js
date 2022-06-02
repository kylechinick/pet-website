$(document).ready(function () {
  $('.button_dark-theme').click(function () {
    $('body').removeClass();
    $('body').addClass('dark-background');
    $('.button_dark-theme').toggle();
    $('.button_light-theme').toggle();
  });
});

$(document).ready(function () {
  $('.button_light-theme').click(function () {
    $('body').removeClass();
    $('.button_light-theme').toggle();
    $('.button_dark-theme').toggle();
  });
});


.toggleClass()