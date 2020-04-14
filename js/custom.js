/******************************************
    File Name: custom.js
    Template Name: Landigoo
    Created By: MelodyThemes
    Envato Profile: http://themeforest.net/user/melodythemes
    Website: https://melodythemes.com
    Version: 1.0
/****************************************** */

(function ($) {
  'use strict';

  /* ==============================================
		SMOOTH SCROLL 
	=============================================== */
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
        );
        return false;
      }
    }
  });
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54,
  });
  /* =========================
            SCROLL MENU
        =========================*/
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.header-block-top').addClass('fixed-menu');
    } else {
      $('.header-block-top').removeClass('fixed-menu');
    }
  });

  /* =========================
            NAV MENU
        =========================*/
  $('.navbar-nav li a').on('click', function (e) {
    $('.navbar-nav li').removeClass('active');
    var $parent = $(this).parent();
    if (!$parent.hasClass('active')) {
      $parent.addClass('active');
      var navbar = $('#navbar');
      navbar.removeClass('in');
      navbar.attr('aria-expanded', false);
    }
  });

  /* =========================
            CAROUSEL 
        =========================*/

  $(document).ready(function () {
    $('#owl-demo').owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 2],
    });
  });

  /* ========================
		SLIDER - TAB 
	=============================*/

  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });

  $('.slider-nav')
    .on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 7,
      dots: false,
      focusOnSelect: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });

  /* ========================
		WOW ANIMATION
	=============================*/

  new WOW().init();

  /* ========================
		DATE/TIME PICKER
	=============================*/

  var date = new Date();
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  $('#date-picker').datetimepicker({
    format: 'DD.MM.YYYY',
    minDate: today,
  });
  $('#time-picker').datetimepicker({
    format: 'LT',
  });

  /* ==============================================
		SELECTPICKER
	=============================================== */

  $('.selectpicker').selectpicker();

  /* ==============================================
		PRELOADER
	=============================================== */

  $(window).load(function () {
    $('#status').fadeOut('slow');
    $('#loader').delay(200).fadeOut();
  });

  /* ==============================================
		SCROLL UP
	=============================================== */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      600,
    );
    return false;
  });

  /* ================================================
		COLOR PANEL OPEN/CLOSE
	================================================ */

  $('#color-panel .panel-button').click(function () {
    $('#color-panel').toggleClass('close-color-panel', 'open-color-panel', 1000);
    $('#color-panel').toggleClass('open-color-panel', 'close-color-panel', 1000);
    return false;
  });
  // Color Skins
  $('.switcher').click(function () {
    var title = jQuery(this).attr('title');
    jQuery('#changeable-colors').attr('href', 'css/colors/' + title + '.css');
    return false;
  });

  jQuery('.orange-bg').on('click', function () {
    jQuery('.logo-header img').attr('src', 'images/logo.png');
    jQuery('.footer-logo .text-center img').attr('src', 'images/logo.png');
    return false;
  });

  jQuery('.strong-blue-bg').on('click', function () {
    jQuery('.logo-header img').attr('src', 'images/logo2.png');
    jQuery('.footer-logo .text-center img').attr('src', 'images/logo2.png');
    return false;
  });

  jQuery('.moderate-green-bg').on('click', function () {
    jQuery('.logo-header img').attr('src', 'images/logo3.png');
    jQuery('.footer-logo .text-center img').attr('src', 'images/logo3.png');
    return false;
  });

  jQuery('.vivid-yellow-bg').on('click', function () {
    jQuery('.logo-header img').attr('src', 'images/logo4.png');
    jQuery('.footer-logo .text-center img').attr('src', 'images/logo4.png');
    return false;
  });

  /* ==============================================
		PARALLAX
	=============================================== */

  $.fn.parallax = function (options) {
    var windowHeight = $(window).height();

    // Establish default settings
    var settings = $.extend(
      {
        speed: 0.15,
      },
      options,
    );

    // Iterate over each object in collection
    return this.each(function () {
      // Save a reference to the element
      var $this = $(this);

      // Set up Scroll Handler
      $(document).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var offset = $this.offset().top;
        var height = $this.outerHeight();

        // Check if above or below viewport
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return;
        }

        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

        // Apply the Y Background Position to Set the Parallax Effect
        $this.css('background-position', 'center ' + yBgPosition + 'px');
      });
    });
  };

  $('.parallax').parallax({
    speed: 0.15,
  });

  /* ==============================================
		PRODUCTS SEARCH AND FILTER
	=============================================== */
  $('#search-products').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('.grid-container div').filter(function () {
      const tagAttribute = $(this).attr('tag');
      if (tagAttribute) {
        $(this).toggle(tagAttribute.toLowerCase().indexOf(value) > -1);
      }
    });
  });

  $('#cart').click(function () {
    const shopList = [];
    for (let i = 0; i < productList.length; i++) {
      const qtyCell = $(`#q${i}`).text();
      const qty = parseInt(qtyCell);
      if (qty > 0) {
        const itemDesc = $(`#i${i}`).text();
        if (qty > 1) shopList.push(`${itemDesc} x(${qtyCell})`);
        else shopList.push(itemDesc);
      }
    }

    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val(JSON.stringify(shopList, null, ' ')).select();
    document.execCommand('copy');
    $temp.remove();
  });

  $(document).ready(function () {
    for (let i = 0; i < productList.length; i++) {
      const item = productList[i];
      if (item.startsWith('<h3>')) {
        let headingCells = `
          <div tag="${item}"></div>
          <div tag="${item}">${item}</div>
          <div tag="${item}"></div>
          <div tag="${item}"></div>`;

        $('.grid-container').append(headingCells);
      } else {
        let cells = `
          <div class="grid-cell" id="m${i}" tag="${item}"><i class="fa fa-minus-square fa-2x" /></div>
          <div class="grid-cell" id="i${i}" tag="${item}">${item}</div>
          <div class="grid-cell" id="p${i}" tag="${item}"><i class="fa fa-plus-square fa-2x" /></div>
          <div class="grid-cell" id="q${i}" tag="${item}">0</div>`;

        $('.grid-container').append(cells);
      }
    }

    $('.fa-minus-square, .fa-plus-square').click(function () {
      const clickedGridCellId = $(this).parent().attr('id');
      const selectedIndex = clickedGridCellId.substring(1, clickedGridCellId.length);
      const cartQtyDiv = $(`#cart-qty`);
      const cartQty = parseInt(cartQtyDiv.text());
      const qtyDiv = $(`#q${selectedIndex}`);
      const qty = parseInt(qtyDiv.text());

      if (clickedGridCellId.startsWith('m') && qty > 0) {
        qtyDiv.text(qty - 1);
        cartQtyDiv.text(cartQty - 1);
      } else if (clickedGridCellId.startsWith('p')) {
        qtyDiv.text(qty + 1);
        cartQtyDiv.text(cartQty + 1);
      }
    });
  });
})(jQuery);
