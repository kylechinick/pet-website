// $(document).ready(function() {
//   $("darkThemeBtn").click(function() {
//     $("body").addClass(".chartreuse-background");
//   })
// })

$(document).ready(function () {
  $('.toggle-theme').click(function () {
    $("body").removeClass();
    $("body").addClass("dark-color")
  });
});

$(document).ready(function () {
  $('.toggle-theme').click(function () {
    $("body").removeClass();
    $("body").addClass("light-color")
  });
});

$(document).ready(function () {
  $(".clickable").click(function() {
    $("#hide-button").toggle();
    $("#show-button").toggle();
  });
});

// 
// button/ toggles to dark/ remove dark/