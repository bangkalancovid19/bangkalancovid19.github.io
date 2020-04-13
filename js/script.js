/*==============================================================================================================
Theme: Cedia Multi-purpose One Page Theme	
Version:	1.0
Theme Available on - Themeforest.com
Author:	abmathasuriya
Design By - VibrantTheme.com
Last update - 17th Jan 2019
===============================================================================================================*/

"use strict";

/* ---------------------------------------------
   Scripts initialization
   --------------------------------------------- */

// Onload Methods
$(window).on("load", function () {

  $("body").imagesLoaded({
    background: true
  }, function () {
    $(".page-loader div").fadeOut();
    $(".page-loader").delay(200).fadeOut("slow");
  });

  // Init Portfolio
  initWorkFilter();

  $(window).trigger("scroll");
  $(window).trigger("resize");

  // Hash menu forwarding
  if (window.location.hash && $(window.location.hash).length) {
    var hash = window.location.hash.substr(1);
    if (hash != "") {
      setTimeout(function () {
        $(window).imagesLoaded(function () {
          var scrollAnimationTime = 1200,
            scrollAnimation = 'easeInOutExpo';
          var target = '#' + hash;
          if ($(target).length > 0) {

            $('html, body').stop()
              .animate({
                'scrollTop': $(target).offset().top - 95
              }, scrollAnimationTime, scrollAnimation, function () {
                window.location.hash = target;
              });
          }
        });
      }, 500);
    }
  }
});

// Document ready methods
$(document).ready(function () {
  $(window).trigger("resize");
  mobileNavHandler(); //Mobile navigation handler
  handleFadeoutOuterLink(); //Fadeout outer link
  js_hight_fullscreen(); //Fullscreen height handler
  setbackgroundImage(); //Background image handler
  fixedMenueBackTop(); //Fixed menu and back to top button script
  bindHashFunctionality(); //Bind hash functionality for one page scroll
  init_masonry(); //Masonry layout 
  altWorkPopup(); //Work popup up handler
  altContactPopup(); //Contact poup handler
  equalizeHeight(); //Equilize block height
  init_allSlider(); //Initialize all slider
  init_portfolio_detail_slider(); //Initialize project detail slider 
  init_team(); //Team hover effect handler
  init_lightbox(); //Lightbox handler
  init_subscribe(); //Subscribe Handler
  init_contactForm(); //Contact form handler
  init_videowrapper(); //Initialize Video player
});

// Window on resize methods
$(window).on("resize", function () {
  setTimeout(function () {
    equalizeHeight();
    js_hight_fullscreen();
  }, 500);
});

function init_team() {
  $(".team-member").on("click", function (e) {
    e.preventDefault();
    var c = $(this);
    var s = false;
    $(".team-member").each(function () {
      if (c.hasClass("is-expanded")) s = true;
      $(this).removeClass("is-expanded");
    });
    if (!s) c.toggleClass("is-expanded");
    else c.removeClass("is-expanded");
    if ($(window).width() > 992) {
      c.parents(".row").equalize({
        reset: true
      });
    } else {
      c.parents(".row").children().css("height", "");
    }
  });
}

function init_allSlider() {

  //Home page content slider
  // approach slider 
  var $homepage1 = $("#homepage-content-slider");
  $homepage1.slick({
    autoplay: true,
    pauseOnHover: false,
    draggable: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800
  });

  var $homepage3 = $("#homepage-image-slider");
  $homepage3.slick({
    dots: true,
    infinite: false,
    speed: 800,
    prevArrow: $('.owl-slider-2-left'),
    nextArrow: $('.owl-slider-2-right'),
  });

  var $homepage2 = $("#homepage-content-slider-2");
  $homepage2.slick({
    autoplay: true,
    pauseOnHover: false,
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
  });

  var $homepage4 = $("#homepage-image-slider-2");
  $homepage4.slick({
    autoplay: true,
    pauseOnHover: false,
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
  });

  //clients slider
  var $s1 = $("#brands-slider");
  $s1.slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Home Testimonial slider
  var $s2 = $("#testimonial-slider");
  $s2.slick();

  // approach slider 
  var $s3 = $("#slick-slider3");
  $s3.slick({
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.owl-slider-2-left'),
    nextArrow: $('.owl-slider-2-right'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Home gallery slider
  var $s4 = $("#about-gallery");
  $s4.slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: 'linear',
    speed: 6000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Home Testimonial slider
  var $s5 = $("#owl-slider-technology");
  $s5.slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'linear'
  });


  var $s6 = $("#slick-slider4");
  $s6.slick({
    prevArrow: $('.content-slider-left'),
    nextArrow: $('.content-slider-right'),
  });

}

function init_lightbox() {
  // Works Item Lightbox
  $(".work-lightbox").magnificPopup({
    gallery: {
      enabled: true
    },
    mainClass: "mfp-fade"
  });

  // About us section gallery
  $(".lightbox-gallery").magnificPopup({
    gallery: {
      enabled: true
    }
  });

  // Play video Lightbox
  $(".lightbox-gallery-1").magnificPopup({
    gallery: {
      enabled: true
    }
  });

  $(".lightbox").magnificPopup();
}

function equalizeHeight() {
  $(document).imagesLoaded(function () {
    if ($(window).width() < 768) {
      $(".equalize").equalize({
        equalize: "outerHeight",
        reset: true
      });
      $(".equalize.md-equalize-auto").children().css("height", "");
      $(".equalize.sm-equalize-auto").children().css("height", "");
      $(".equalize.xs-equalize-auto").children().css("height", "");
      return false;
    } else if ($(window).width() <= 992) {
      $(".equalize").equalize({
        equalize: "outerHeight",
        reset: true
      });
      $(".equalize.md-equalize-auto").children().css("height", "");
      $(".equalize.sm-equalize-auto").children().css("height", "");
      return false;
    } else if ($(window).width() <= 1199) {
      $(".equalize").equalize({
        equalize: "outerHeight",
        reset: true
      });
      $(".equalize.md-equalize-auto").children().css("height", "");
      return false;
    } else {
      $(".equalize").equalize({
        equalize: "outerHeight",
        reset: true
      });
    }
  });
}

function bindHashFunctionality() {
  $('header a[href*="#"],.footer nav a[href*="#"],.popup.is-popup-menu a[href*="#"]').on("click", function (e) {
    var t = $(this).attr("href").trim().replace("./", ""),
      a = 0;
    if (t.length > 1 && void 0 != $(t)[0]) {
      var i = $(t).position().top - 95;
      (a = i),
      $("html, body").stop().animate({
        scrollTop: a
      }, 1e3, "easeInOutExpo");
    }
  });
}

function mobileNavHandler() {
  $(".header button").on("click", function (e) {
      $(".is-popup-menu").show(50),
        e.preventDefault(),
        $("body").addClass("is-popup-open is-open-menu");
    }),
    $(".popup-menu-close").on("click", function (e) {
      $(".is-popup-menu").hide(50),
        e.preventDefault(),
        $("body").removeClass("is-popup-open is-open-menu");
    }),
    $(".popup-menu-items").html($(".header nav").html()),
    $(".popup-menu-items a").on("click", function (e) {
      $(".is-popup-menu").hide(50);
      $("body").removeClass("is-popup-open is-open-menu");
    });
}

function handleFadeoutOuterLink() {
  $('a[data-link-outer="true"]').on("click", function (e) {
    e.preventDefault();
    var linkLocation = this.href;
    setTimeout(function () {
      location.href = linkLocation;
    }, 500);
  });
}

function fixedMenueBackTop() {
  var e;
  $(window).scroll(function () {

      clearTimeout(e);
      if (
        ($(window).scrollTop() > 250 ?
          ($("body").addClass("fixed-menu-open"),
            $(".header").addClass("is-fixed")) :
          ($(".header").removeClass("is-fixed"),
            $("body").removeClass("fixed-menu-open")),
          $(window).scrollTop() > $(window).height() ?
          $(".back-to-top").addClass("is-show") :
          $(".back-to-top").removeClass("is-show"))
      ) {
        var e;
        $('[data-inpage-section="true"]').each(function (t, a) {
          elementInViewport(a) &&
            (clearTimeout(e),
              (e = setTimeout(function () {
                $(".header nav li").removeClass("is-active"),
                  $(".header nav li").find('[data-nav-target="' + $(a).attr("id") + '"]').parent().addClass("is-active");
              }, 100)));
        });
      }
    }),
    $(".back-to-top").on("click", function (e) {
      e.preventDefault(),
        $("html, body")
        .stop()
        .animate({
            scrollTop: 0
          },
          1e3,
          "easeInOutExpo"
        );
    });
}

function elementInViewport(e) {
  for (
    var t = e.offsetTop,
      a = e.offsetLeft,
      o = e.offsetWidth,
      i = e.offsetHeight; e.offsetParent;

  )
    (e = e.offsetParent), (t += e.offsetTop), (a += e.offsetLeft);
  return (
    t < window.pageYOffset + window.innerHeight &&
    a < window.pageXOffset + window.innerWidth &&
    t + i > window.pageYOffset &&
    a + o > window.pageXOffset
  );
}

function altContactPopup() {
  var e = 0;

  //Individual project on click event
  $(".btn-contact-popup").on("click", function (t) {

    //Open Popup 
    //if (void 0 == $(this).attr("data-url")) return !0;
    $(".is-popup-contact").show();
    t.preventDefault();

    //Empty previous content if any and set current index
    $(".is-popup-work").find(".popup-content .project-detail").html();

    $("body").addClass("is-popup-open is-open-contact");

  });

  //On popup close button event
  $(".is-popup-contact .popup-close").on("click", function (e) {
    e.preventDefault();
    $(".popup-content").addClass("is-fade-out");
    setTimeout(function () {
      $("body").removeClass("is-popup-open");
      $(".popup-content").removeClass("is-fade-out");
      $(".is-popup-contact").hide();
      $(".is-popup-contact").find(".popup-content .project-detail").html("");
    }, 600);
  });

}

function altWorkPopup() {
  var e = 0;

  //Individual project on click event
  $("#work-grid li a.item-grid-style1").on("click", function (t) {
    $(".project-detail-nav-link-prev,.project-detail-nav-link-next").parents('.page-section').hide();
    //Set Previous and Next project name in Projecgt Navigation
    var pre_project = $(this).parent().prev("li").find(".project-name").text();
    var next_project = $(this).parent().next("li").find(".project-name").text();

    //Open Popup 
    if (void 0 == $(this).attr("data-url")) return !0;
    $(".is-popup-work").show();
    t.preventDefault();

    //Empty previous content if any and set current index
    $(".is-popup-work").find(".popup-content .project-detail").html();
    e = $(this).parent().index();

    //Ajax call to get project content and append 
    var project_url = $(this).attr("data-url");
    $.ajax({
      url: project_url,
      type: "GET",
      cache: false,
      success: function (data) {
        $(".is-popup-work").find(".popup-content .project-detail").append(data).html();
        setTimeout(function () {
          $(".popup-content .project-detail").imagesLoaded(function () {
            $(".popup-content .page-loader div").fadeOut();
            $(".popup-content .page-loader").delay(200).fadeOut("slow");
          });
          $(window).trigger("resize");
          setbackgroundImage();
          init_portfolio_detail_slider();
          init_masonry();
          init_lightbox();
          init_videowrapper();
          var $container = $('.projects-wrapper');
          // Initialize isotope 
          $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
              duration: 750,
              easing: 'linear'
            }
          });

        }, 100);
        //add class to body that popup is open and set pre/next project name in footer navigation and also show hide previous next project name in footer navigation   
      },
      error: function (request, status, error) {
        alert(request.responseText);
      }
    });
    $("body").addClass("is-popup-open is-open-work");
    $(".project-detail-nav-link-prev .pre-project-name").text(pre_project);
    $(".project-detail-nav-link-next .next-project-name").text(next_project);
    $(".project-detail-nav-link-prev,.project-detail-nav-link-next").hide();
    $(this).parent().index() > 0 && $(".project-detail-nav-link-prev").show(300);
    $(this).parent().index() < $(this).parent().parent().find("li").length - 1 && $(".project-detail-nav-link-next").show(300);
    setTimeout(function () {
      $(".project-detail-nav-link-prev,.project-detail-nav-link-next").parents('.page-section').show();
    }, 1000);
  });

  //On popup close button event
  $(".is-popup-work .popup-close").on("click", function (e) {
    e.preventDefault();
    $(".popup-content").addClass("is-fade-out");
    setTimeout(function () {
      $("body").removeClass("is-popup-open");
      $(".popup-content").removeClass("is-fade-out");
      $(".is-popup-work").hide();
      $(".is-popup-work").find(".popup-content .project-detail").html("");
    }, 600);
  });

  //On previous Next project click 
  $(".popup .project-detail-nav-link-prev,.popup .project-detail-nav-link-next").on("click", function () {
    $(".project-detail-nav-link-prev,.project-detail-nav-link-next").parents('.page-section').hide();
    //find current item index and Set Previous and Next project name 
    $(this).hasClass("project-detail-nav-link-prev") ? e-- : e++;
    var t = $("#work-grid li").eq(e).find("a");

    if (!t.attr("data-url")) return void window.open(t.attr("href"));
    //Empty previous work content if any and ajax call to fatch project content
    $(".is-popup-work").find(".popup-content .project-detail").html("");
    $.ajax({
      url: t.attr("data-url"),
      type: "GET",
      cache: false,
      success: function (data) {
        $(".is-popup-work").find(".popup-content .project-detail").append(data).html();
        setTimeout(function () {
          $(window).trigger("resize");
          setbackgroundImage();
          init_portfolio_detail_slider();
          init_masonry();
          init_lightbox();
          init_videowrapper();
          var $container = $('.projects-wrapper');
          // Initialize isotope 
          $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
              duration: 750,
              easing: 'linear'
            }
          });

        }, 100);
      }
    });
    var pre_project = t.parent().prev("li").find(".project-name").text();
    var next_project = t.parent().next("li").find(".project-name").text();
    //set next previous project name in nav and show hide previous next project nav 
    $(".project-detail-nav-link-prev .pre-project-name").text(pre_project);
    $(".project-detail-nav-link-next .next-project-name").text(next_project);
    $(".project-detail-nav-link-prev,.project-detail-nav-link-next").hide();
    if (pre_project != "")
      $(".project-detail-nav-link-prev").show(300);
    else
      $(".project-detail-nav-link-prev").hide(300);
    if (next_project != "")
      $(".project-detail-nav-link-next").show(300);
    else
      $(".project-detail-nav-link-next").hide(300);
    setTimeout(function () {
      $(".project-detail-nav-link-prev,.project-detail-nav-link-next").parents('.page-section').show();
    }, 1000);
  });

}

function init_videowrapper() {
  $(".fluid-width-video-wrapper").fitVids();
}

function init_masonry() {
  (function ($) {

    $(".masonry").imagesLoaded(function () {
      $(".masonry").masonry();
    });

  })(jQuery);
}

function setbackgroundImage() {
  var pageSection = $(".bg-image,.page-section,.hero-section");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });
}

function init_portfolio_detail_slider() {

  // Project detail screens slider
  var $p1 = $("#project-detail-screens");
  $p1.slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 1500
  });

  var p2 = $("#project-detail-item-gallery");
  if (p2.length > 0) {
    p2.slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      speed: 6000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  var $p3 = $("#project-detail-mockup-slider");
  $p3.slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 1000
  });

}

function init_subscribe() {
  var $form = $("#mailchimp");
  $(".newsletter-submit").on("click", function (e) {
    e.preventDefault();
    var user_email = $("form#mailchimp input[name=email]").val();
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;
    //Valiadation
    var proceed = true;
    if (user_email == "") {
      $("#mailchimp input[name=email]").css("border-bottom-color", "#e41919");
      proceed = false;
    }
    if (proceed) {
      var data_string = $form.serialize();
      //$('#submit_btn').fadeOut();
      $.ajax({
        type: "GET",
        url: $form.attr("action"),
        data: data_string,
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          if (data.result != "success") {
            $("#subscribe-result")
              .html('<div class="alert mb-0"><span>' + data.msg + "</span></div>").slideDown();
          } else {
            $("#subscribe-result").html('<div class="alert mb-0"><span> ' + data.msg + " </span></div>").slideDown();
          }
        },
        error: function (err) {
          $("#subscribe-result")
            .html('<div class="alert mb-0"><i class="fa fa-exclamation contact-error"></i><span> Something went wrong, please try again later.</span></div>').slideDown();
        }
      });
    }
    return false;
  });

  $("#mailchimp input").on("keyup", function (event) {
    $("#subscribe-result").slideUp();
  });
}

function init_contactForm() {
  $("#submit_btn").on("click", function (event) {
    event.preventDefault();
    var user_name = $("input[name=name]").val();
    var user_email = $("input[name=email]").val();
    var user_message = $("textarea[name=message]").val();
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;

    //Valiadation
    var proceed = true;
    if (user_name == "") {
      $("input[name=name]").css("border-bottom-color", "#212121");
      proceed = false;
    }
    if (user_email == "") {
      $("input[name=email]").css("border-bottom-color", "#212121");
      proceed = false;
    }
    if (!emailReg.test(user_email)) {
      $("input[name=email]").css("border-bottom-color", "#212121");
      proceed = false;
    }
    if (user_message == "") {
      $("textarea[name=message]").css("border-bottom-color", "#212121");
      proceed = false;
    }

    if (proceed) {
      var data_string = $("#contact_form").serialize();
      $("#submit_btn").fadeOut();
      $.ajax({
        type: "POST",
        url: "contact-form.php",
        data: data_string,
        success: function (data) {
          $("#submit_output")
            .html(
              '<div class="heading-big-subhead fw700 mt-0 mb-0"><span> Your message has been sent.</span></div>'
            )
            .slideDown();

          $("#contact_form input").val("");
          $("#contact_form textarea").val("");
        },
        error: function (data) {
          $("#submit_output")
            .html(
              '<div class="heading-big-subhead fw700 mt-0 mb-0"><span> Something went wrong! please try again later.</span></div>'
            )
            .slideDown();
          $("#submit_btn").fadeIn();
        }
      });
    }
    return false;
  });

  $("#contact_form input, #contact_form textarea").on("keyup", function (
    event
  ) {
    $("#contact_form input, #contact_form textarea").css(
      "border-color",
      "#fff"
    );
    $("#submit_output").slideUp();
  });
}

function js_hight_fullscreen() {
  $(".fullscreen,.fullscreenvideo").height($(window).height());
  $(".height-parent").each(function () {
    $(this).height(
      $(this)
      .parent()
      .first()
      .height()
    );
  });
}

/* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */
// Projects filtering
var fselector = 0;
var work_grid = $("#work-grid, #isotope");

function initWorkFilter() {
  (function ($) {
    "use strict";
    var isotope_mode;
    if (work_grid.hasClass("masonry")) {
      isotope_mode = "masonry";
    } else {
      isotope_mode = "fitRows";
    }

    $(".filter").on("click", function (event) {
      $(".filter").removeClass("active");
      $(this).addClass("active");
      fselector = $(this).attr("data-filter");

      work_grid.imagesLoaded(function () {
        work_grid.isotope({
          itemSelector: ".mix",
          layoutMode: isotope_mode,
          filter: fselector
        });
      });
      return false;
    });

    if (window.location.hash) {
      $(".filter").each(function () {
        if (
          $(this).attr("data-filter") ==
          "." + window.location.hash.replace("#", "")
        ) {
          $(this).trigger("click");

          $("html, body").animate({
            scrollTop: $("#portfolio").offset().top
          });
        }
      });
    }

    work_grid.imagesLoaded(function () {
      work_grid.isotope({
        itemSelector: ".mix",
        layoutMode: isotope_mode,
        filter: fselector
      });
    });
  })(jQuery);
}