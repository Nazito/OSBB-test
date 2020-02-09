$(window).load(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").addClass("ios");
  } else {
    $("body").addClass("web");
  }
  $("body").removeClass("loaded");
});
/* viewport width */
function viewport() {
  var e = window,
    a = "inner";
  if (!("innerWidth" in window)) {
    a = "client";
    e = document.documentElement || document.body;
  }
  return { width: e[a + "Width"], height: e[a + "Height"] };
}
/* viewport width */
$(function() {
  /* placeholder*/

  $("input, textarea").each(function() {
    var placeholder = $(this).attr("placeholder");
    $(this).focus(function() {
      $(this).attr("placeholder", "");
    });
    $(this).focusout(function() {
      $(this).attr("placeholder", placeholder);
    });
  });
  /* placeholder*/

  $(".button-nav").click(function() {
    $(this).toggleClass("active"), $(".main-nav-list").slideToggle();
    return false;
  });

  /* components */

  if ($("#slider2").length) {
    var owl = $("#slider2");

    owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: true,
      pagination: true,
      autoplay: true,
      autoplayTimeout: 2500
    });
  }

  if ($("#slider1").length) {
    var owl = $("#slider1");

    owl.owlCarousel({
      items: 1,
      margin: 30,
      slideBy: 1,
      loop: true,
      nav: true,
      pagination: true,
      autoplay: true,
      autoplayTimeout: 2500,
      responsive: {
        //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0: {
          nav: false,
          dots: false
        },
        767: {
          nav: true,
          dots: true
        }
      }
    });
  }

  $(".burger-menu").click(function() {
    $(this).toggleClass("active");
    $(".header__wrapper_container-nav").slideToggle();
  });

  $("#fields_phone").mask("+38 (999) 999-99-99");

  /* components */
});

$("form#form_Osbb").submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: "send-1.php",
    type: "post",
    data: $(this).serialize(),
    success: function(response) {
      $(".thanks-msg-bg, .thanks-msg").addClass("active");
      setTimeout(function() {
        location.reload();
      }, 2500);
    }
  });
});

var handler = function() {
  var height_footer = $("footer").height();
  var height_header = $("header").height();
  //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});

  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;

  if (viewport_wid <= 991) {
  }
};
$(window).bind("load", handler);
$(window).bind("resize", handler);
