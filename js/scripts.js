// $(document).ready(function() {
//   $("darkThemeBtn").click(function() {
//     $("body").addClass(".chartreuse-background");
//   })
// })

// $(document).ready(function () {
//   $('.toggle-theme').click(function () {
//     $("body").removeClass();
//     $("body").addClass("dark-color")
//   });
// });

// $(document).ready(function () {
//   $('.toggle-theme').click(function () {
//     $("body").removeClass();
//     $("body").addClass("light-color")
//   });
// });

// $(document).ready(function () {
//   $(".clickable").click(function() {
//     $("#hide-button").toggle();
//     $("#show-button").toggle();
//   });
// });

//
// button/ toggles to dark/ remove dark/

$(document).ready(function () {
  $('.clickable').click(function () {
    $('#dark-div').toggle();
    $('#light-div').toggle();
  });
});

// User lands on page with light background

// User clicks theme button
// -- Div background changed to dark color

// User clicks theme button AGAIN
// -- Div background toggles 
