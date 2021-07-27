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
.back.fixed, back-2.fixed{
  width: 1120px;
  padding: 0 ${($(window).width() - 1120) / 2}px;
}

@media (max-width: 1061px) {
  .header #mobile-menu:checked ~ .header__nav {
    height: ${$(window).height()}px;
  }
}
`);

$(window).resize(function () {
  $("#style-1").text(`
  .back.fixed, back-2.fixed{
    width: 1120px;
    padding: 0 ${($(window).width() - 1120) / 2}px;
  }

  @media (max-width: 1061px) {
    .header #mobile-menu:checked ~ .header__nav {
      height: ${$(window).height()}px;
    }
  }
`);
});

$(window).scroll(function () {
  $(window).resize(function () {
    $("#style-1").text(`
    .back.fixed, back-2.fixed{
      width: 1120px;
      padding: 0 ${($(window).width() - 1120) / 2}px;
    }
  
    @media (max-width: 1061px) {
      .header #mobile-menu:checked ~ .header__nav {
        height: ${$(window).height()}px;
      }
    }
  `);
  });
});

if ($(window).scrollTop() >= 72) {
  $(".back").addClass("fixed");
} else {
  $(".back").removeClass("fixed");
}

$(window).scroll(function () {
  if ($(window).scrollTop() >= 72) {
    $(".back").addClass("fixed");
  } else {
    $(".back").removeClass("fixed");
  }
});

$(window).resize(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 72) {
      $(".back").addClass("fixed");
    } else {
      $(".back").removeClass("fixed");
    }
  });
});

if (
  $(window).scrollTop() >=
  $(".header").height() +
    $("#slider").height() +
    $("#programms").height() +
    $("#popular").height() +
    $(".restaurant__title").height()
) {
  $(".back-2").addClass("fixed");
} else {
  $(".back-2").removeClass("fixed");
}

$(window).scroll(function () {
  if (
    $(window).scrollTop() >=
    $(".header").height() +
      $("#slider").height() +
      $("#programms").height() +
      $("#popular").height() +
      $(".restaurant__title").height()
  ) {
    $(".back-2").addClass("fixed");
  } else {
    $(".back-2").removeClass("fixed");
  }
});

$(window).resize(function () {
  $(window).scroll(function () {
    if (
      $(window).scrollTop() >=
      $(".header").height() +
        $("#slider").height() +
        $("#programms").height() +
        $("#popular").height() +
        $(".restaurant__title").height()
    ) {
      $(".back-2").addClass("fixed");
    } else {
      $(".back-2").removeClass("fixed");
    }
  });
});

for (
  let i = 0;
  i < document.getElementsByClassName("restaurant__item").length;
  i++
) {
  const a = document.getElementsByClassName("restaurant__item")[i];
  a.onclick = function () {
    $("html, body").animate(
      {
        scrollTop:
          $(".header").height() +
          $("#slider").height() +
          $("#programms").height() +
          $("#popular").height() +
          $(".restaurant__title").height() +
          20,
      },
      500
    );
  };
}

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
