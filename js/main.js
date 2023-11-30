(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
     //  Dark theme
    // var darkBtn = document.getElementById("dark-btn");
    // darkBtn.onclick = function () {
     //    darkBtn.classList.toggle("dark-btn-on");
     //    document.body.classList.toggle("dark-theme");
    // } 

   var darkBtn = document.getElementById("dark-btn");
var mainNavbar = document.getElementById("main-navbar");


document.addEventListener("DOMContentLoaded", function() {
    const darkBtn = document.getElementById("dark-btn");
    const mainNavbar = document.getElementById("main-navbar");
    // Check for stored theme preference in localStorage
    const storedTheme = localStorage.getItem("dark-button");
    if (storedTheme === "dark") {
      applyDarkTheme();
    }
  
    // Toggle the theme on button click
    darkBtn.onclick = function () {
      if (document.body.classList.contains("dark-theme")) {
        removeDarkTheme();
        localStorage.setItem("dark-button", "light"); // Update localStorage value
      } else {
        applyDarkTheme();
        localStorage.setItem("dark-button", "dark"); // Update localStorage value
      }
    };
  
    function applyDarkTheme() {
      darkBtn.classList.add("dark-btn-on");
      document.body.classList.add("dark-theme");
      replaceClass(mainNavbar, "navbar-light", "navbar-dark");
    }
  
    function removeDarkTheme() {
      darkBtn.classList.remove("dark-btn-on");
      document.body.classList.remove("dark-theme");
      replaceClass(mainNavbar, "navbar-dark", "navbar-light");
    }
    function replaceClass(element, oldClass, newClass) {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
      }
  });
 // darkBtn.onclick = function () {
  //  darkBtn.classList.toggle("dark-btn-on");
  //  document.body.classList.toggle("dark-theme");

  //  if (mainNavbar.classList.contains("navbar-dark")) {
  //      replaceClass("main-navbar", "navbar-dark", "navbar-light");
  //  } else {
   //     replaceClass("main-navbar", "navbar-light", "navbar-dark");
  //  }
//}

//function replaceClass(id, oldClass, newClass) {
  //  var elem = document.getElementById(id);
  //  elem.classList.remove(oldClass);
 //   elem.classList.add(newClass);

})(jQuery);

