// const Screens = {
//   HOME: "home",
//   WORKS: "work",
//   ABOUT: "about",
// };

// let currentScreen = Screens.HOME;

var $buttons = jQuery(".header-button");
$("#header-work").on("click", function () {
  $("#header-work").toggleClass("active");
  $("#portfolio").toggleClass("active");
  $("#about").css("z-index", 0);
});

$("#header-about").on("click", function () {
  if ($("#header-work").hasClass("active")) {
    $("#about").removeClass("about__transition");
    $("#about").css("top", "100%");
    $("#about").css("opacity", 1);
    setTimeout(() => {
      $("#about").addClass("about__transition");
      $("#about").css("top", "0");
      $("#about").css("z-index", 1);
      setTimeout(() => {
        $("#header-work").removeClass("active");
        $("#portfolio").removeClass("active");
        $("#portfolio").addClass("hidden");
        setTimeout(() => {
          $("#about").css("z-index", 0);
          $("#portfolio").removeClass("hidden");
        }, 500);
      }, 300);
    }, 50);
  } else {
    if ($("#about").css("opacity") == 0) {
      $("#about").addClass("about__transition");
      $("#about").css("opacity", 1);
    } else {
      $("#about").css("opacity", 0);
    }
  }
});
