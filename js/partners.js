/*기업이미지*/
var swiperPartner = new Swiper(".partner-swiper .mySwiper", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".partner-swiper .swiper-button-next img",
    prevEl: ".partner-swiper .swiper-button-prev img",
  },
  breakpoints: {
    600: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

/*기업이미지*/
var swiperPartner2 = new Swiper(".partner-popup .mySwiper", {
  navigation: {
    nextEl: ".partner-popup .swiper-button-next img",
    prevEl: ".partner-popup .swiper-button-prev img",
  },
  pagination: {
    el: ".partner-popup .swiper-pagination",
    type: "fraction", // 페이지네이션을 숫자로 표시
  },
});

/*탭*/
$(document).ready(function () {
  $(".tab-nav li").click(function () {
    var idx = $(this).index();
    $(".tab-nav li").removeClass("on");
    $(".tab-nav li").eq(idx).addClass("on");
    $(".tab-con > div").hide();
    $(".tab-con > div").eq(idx).show();
  });
});
