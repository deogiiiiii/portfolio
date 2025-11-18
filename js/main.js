$(document).ready(function () {
  $(".pro-filter button").click(function () {
    var index = $(this).index();
    if (index === 0) {
      $(this).addClass("on").siblings().removeClass("on");
      $(".pro-wrap").removeClass("on");
    } else if (index === 1) {
      $(this).addClass("on").siblings().removeClass("on");
      $(".pro-wrap").addClass("on");
    }
  });
});

$(document).ready(function () {
  $(".pro-etc .region-btn").on("click", function () {
    $(this).toggleClass("on");
    $(".pro-etc .region-list").toggle();

    if (window.innerWidth <= 600) {
      $("body").toggleClass("overflow-hidden");
    }
  });

  $(".pro-etc .region-list .close").on("click", function () {
    $(".pro-etc .region-btn").removeClass("on");
    $(".pro-etc .region-list").hide();

    if (window.innerWidth <= 600) {
      $("body").removeClass("overflow-hidden");
    }
  });
});
