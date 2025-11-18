$(document).ready(function () {
  $(".delete-btn").on("click", function () {
    var $realDelete = $(this).closest(".delete-wrap").find(".real-delete");

    // 현재 보이는 .real-delete가 있는지 확인합니다.
    if ($realDelete.is(":visible")) {
      // 보이는 상태면 숨깁니다.
      $realDelete.hide();
    } else {
      // 보이지 않는 상태면 모든 .real-delete 버튼을 숨기고, 해당 요소만 보이게 합니다.
      $(".real-delete").hide();
      $realDelete.show();
    }
  });

  $(".real-delete").on("click", function (event) {
    // 클릭된 .real-delete 버튼을 숨깁니다.
    $(this).hide();
    // 팝업 열기
    openModal("modal3");
    // 이벤트 전파를 중지시킵니다.
    event.stopPropagation();
  });

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

  function openModal(modalname) {
    $("." + modalname).fadeIn(300);
  }
});

$(document).ready(function () {
  $(".plus-btn").click(function (event) {
    event.stopPropagation(); // Stop the event from propagating to the document
    $(this).toggleClass("on");
    $(this).next(".plus-form").toggle();
  });
});
