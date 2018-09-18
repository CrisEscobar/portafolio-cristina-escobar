
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// TESTIMONIALS
// You can also use "$(window).load(function() {"
$(function () {
 // Slideshow 4
$("#slider3").responsiveSlides({
  auto: true,
  pager: false,
  nav: true,
  speed: 1000,
  namespace: "callbacks",
  before: function () {
$('.events').append("<li>before event fired.</li>");
},
after: function () {
  $('.events').append("<li>after event fired.</li>");
  }
  });
  });
