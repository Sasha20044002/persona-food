const sliderHeader = new Swiper("#slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

$("#style-1").text(`
  .header__nav-2.fixed{
    width: 1120px;
    padding: 0 ${($(window).width() - 1120) / 2}px;
  }

  @media (max-width: 1061px) {
    .header #mobile-menu:checked ~ .header__nav {
      height: ${$(window).height()}px;
    }
    }
  }

  @media (max-width: 1152px) {
    .header, .container, .swiper-container {
      width: ${$(window).width() - 32}px;
      margin: 0 auto;
    }
  }

  @media (max-width: 1120px) {
    width: ${$(window).width() - 32}px;
    padding: 0 16px;
  }

  @media (max-width: 1060px) {
    .swiper-container {
      width: 100%;
      border-radius: 0;
    }
  }
`);

$(window).resize(function () {
  $("#style-1").text(`
  .header__nav-2.fixed{
    width: 1120px;
    padding: 0 ${($(window).width() - 1120) / 2}px;
  }

  @media (max-width: 1061px) {
    .header #mobile-menu:checked ~ .header__nav {
      height: ${$(window).height()}px;
    }
  }

  @media (max-width: 1152px) {
    .header, .container, .swiper-container {
      width: ${$(window).width() - 32}px;
      margin: 0 auto;
    }
  }

  // @media (max-width: 1120px) {
  //   width: ${$(window).width() - 32}px;
  //   padding: 0 16px;
  // }

  @media (max-width: 1060px) {
    .swiper-container {
      width: 100%;
      border-radius: 0;
    }
  }
`);
});

$(window).scroll(function () {
  $(window).resize(function () {
    $("#style-1").text(`
    .header__nav-2.fixed{
      width: 1120px;
      padding: 0 ${($(window).width() - 1120) / 2}px;
    }
  
    @media (max-width: 1061px) {
      .header #mobile-menu:checked ~ .header__nav {
        height: ${$(window).height()}px;
      }
    }
  
    @media (max-width: 1152px) {
      .header, .container, .swiper-container {
        width: ${$(window).width() - 32}px;
        margin: 0 auto;
      }
    }
  
    // @media (max-width: 1120px) {
    //   width: ${$(window).width() - 32}px;
    //   padding: 0 16px;
    // }
  
    @media (max-width: 1060px) {
      .swiper-container {
        width: 100%;
        border-radius: 0;
      }
    }
  `);
  });
});

$(window).scroll(function () {
  // console.log($(window).scrollTop());
  if ($(window).scrollTop() >= 72) {
    $(".header__nav-2").addClass("fixed");
  } else {
    $(".header__nav-2").removeClass("fixed");
  }
});

$(document).ready(function () {
  $(".restaurant__item").click(function () {
    var value = $(this).attr("data-filter");
    var elem = $(".restaurant__block");
    if (value == "all") {
      $(elem).show("0");
    } else {
      $(elem)
        .not("." + value)
        .hide("0");
      $(elem)
        .filter("." + value)
        .show("0");
    }
  });
});
