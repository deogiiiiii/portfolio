// 팝업 열기
function openModal(modalname) {
  // 이벤트 전파 중지
  $("." + modalname).fadeIn(300);
}

// 팝업 닫기 (기존 close 버튼 기능)
$(".popup .close").click(function () {
  $(".popup").fadeOut(300);
});

// 팝업 닫기 (popup-con 영역이 아닌 부분 클릭 시)
$(document).on("click", function (event) {
  if (
    !$(event.target).closest(".popup-con").length &&
    $(".popup").is(":visible")
  ) {
    $(".popup").fadeOut(300);
  }
});

// 팝업 영역 클릭 시 이벤트 전파 중지
$(document).on("click", ".popup-con", function (event) {
  event.stopPropagation();
});

$(document).ready(function () {
  // When the hamburger is clicked
  $(".hambuger").on("click", function (e) {
    e.stopPropagation(); // Stop event propagation
    // Toggle the "on" class on the hamburger
    $(this).toggleClass("on");

    // Toggle body overflow
    $("body").toggleClass("overflow-hidden");

    // Toggle the mob-menu visibility with a smooth slide-down or slide-up animation
    $(".mob-menu").slideToggle(200);
  });

  // When the mob-menu is clicked
  $(".mob-menu").on("click", function (e) {
    e.stopPropagation(); // Stop event propagation
    // Prevent the mob-menu click event from reaching the document level
  });

  // When the document is clicked (to close the mob-menu)
  $(document).on("click", function () {
    // Check if mob-menu is currently visible
    if ($(".mob-menu").is(":visible")) {
      // Toggle the "on" class on the hamburger
      $(".hambuger").removeClass("on");

      // Toggle body overflow
      $("body").removeClass("overflow-hidden");

      // Close the mob-menu with a smooth slide-up animation
      $(".mob-menu").slideUp(200);
    }
  });

  // When .mob-main > li is clicked
  $(".mob-main > li").click(function (e) {
    e.stopPropagation(); // Stop event propagation
    // Your existing code for handling .mob-main > li click event
    $(this).toggleClass("on");
    $(this).find(".mob-sub").slideToggle("fast");
    $(this).siblings().removeClass("on").find(".mob-sub").slideUp("fast");
  });
});
