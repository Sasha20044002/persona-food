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

$(document).ready(function () {
  // restauramt filter
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

for (let i = 0; i < document.getElementsByClassName("label-menu").length; i++) {
  const a = document.getElementsByClassName("label-menu")[i];
  a.onclick = function () {
    if (window.innerWidth <= 1024) {
      if (!document.getElementById("menu-mobile").checked) {
        document.getElementById("right").classList.remove("hidden");
        document.getElementById("navigation-list").classList.remove("hidden");
        document.getElementById("right").classList.add("visible");
        document.getElementById("navigation-list").classList.add("visible");
      } else if (document.getElementById("menu-mobile").checked) {
        document.getElementById("right").classList.add("hidden");
        document.getElementById("navigation-list").classList.add("hidden");
        document.getElementById("right").classList.remove("visible");
        document.getElementById("navigation-list").classList.remove("visible");
      }
    }
  };
}

// header nav
if ($(window).scrollTop() >= 72) {
  $("#style-1").text(`
  #navigation {
    position: fixed;
    background: #ffffff;
    width: ${$("#navigation").width()}px;
  }
  #fixed {
    position: fixed;
    width: 100%;
    height: 72px;
    background: #ffffff;
    top: 0;
    left: 0;
    z-index: 6;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    #navigation {
      position: static;
    }
    #fixed {
      position: static;
      justify-content: flex-end;
      width: 48px;
    }
  }
  `);
} else {
  $("#style-1").text(``);
}

if ($(window).width() >= 1025) {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 72) {
      $("#style-1").text(`
      #navigation {
        position: fixed;
        background: #ffffff;
        width: ${$("#navigation").width()}px;
      }
      #fixed {
        position: fixed;
        width: 100%;
        height: 72px;
        background: #ffffff;
        top: 0;
        left: 0;
        z-index: 6;
        display: flex;
        justify-content: center;
      }
      @media (max-width: 1024px) {
        #navigation {
          position: static;
        }
        #fixed {
          position: static;
          justify-content: flex-end;
          width: 48px;
        }
      }
      `);
    } else {
      $("#style-1").text(``);
    }
  });
}

$(window).resize(function () {
  if ($(window).width() >= 1025) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 72) {
        $("#style-1").text(`
        #navigation {
          position: fixed;
          background: #ffffff;
          width: ${$("#navigation").width()}px;
        }
        #fixed {
          position: fixed;
          width: 100%;
          height: 72px;
          background: #ffffff;
          top: 0;
          left: 0;
          z-index: 6;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 1024px) {
          #navigation {
            position: static;
          }
          #fixed {
            position: static;
            justify-content: flex-end;
            width: 48px;
          }
        }
        `);
      } else {
        $("#style-1").text(``);
      }
    });
  }
});

console.log($("#height").height() + $("#restaurantTitle").height());
// restaurant nav
if (
  $(window).scrollTop() >=
  $("#height").height() + $("#restaurantTitle").height()
) {
  $("#style-2").text(`
  #fixed-2 {
    position: fixed;
    background: #ffffff;
    width: 100%;
    top: 72px;
    left: 0;
    z-index: 6;
    display: flex;
    justify-content: center;
  }
  #restaurantNav{
    margin-bottom: 0;
    margin-left: 24px;
  }
  @media (max-width: 1024px) {
    #fixed-2{top: 0;}
  }
  `);
} else {
  $("#style-2").text(`
  #restaurantNav{
    position: static
  }`);
}

$(window).on("scroll", function () {
  if (
    $(window).scrollTop() >=
    $("#height").height() + $("#restaurantTitle").height()
  ) {
    $("#style-2").text(`
    #fixed-2 {
      position: fixed;
      background: #ffffff;
      width: 100%;
      top: 72px;
      left: 0;
      z-index: 6;
      display: flex;
      justify-content: center;
    }
    #restaurantNav{
      margin-bottom: 0;
      margin-left: 24px;
    }
    @media (max-width: 1024px) {
      #fixed-2{top: 0;}
    }
    `);
  } else {
    $("#style-2").text(`
    #restaurantNav{
      position: static
    }`);
  }
});

$(window).resize(function () {
  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() >=
      $("#height").height() + $("#restaurantTitle").height()
    ) {
      $("#style-2").text(`
      #fixed-2 {
        position: fixed;
        background: #ffffff;
        width: 100%;
        top: 72px;
        left: 0;
        z-index: 6;
        display: flex;
        justify-content: center;
      }
      #restaurantNav{
        margin-bottom: 0;
        margin-left: 24px;
      }
      @media (max-width: 1024px) {
        #fixed-2{top: 0;}
      }
      `);
    } else {
      $("#style-2").text(`
      #restaurantNav{
        position: static
      }`);
    }
  });
});


for (let i = 0; i < document.getElementsByClassName('restaurant__item').length; i++) {
  const a = document.getElementsByClassName('restaurant__item')[i];
  a.onclick = function () {
    // window.scrollTo(0,$('#height').height())
    $('html, body').animate({'scrollTop': ($('#height').height() + 57)}, 500);
  }
}
