var mySwiper = new Swiper(".my-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperMain = new Swiper(".swiper-main", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 20,
    slideShadows: false,
  },
});

var swiperList = new Swiper(".swiper-list", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: true,
});

var swiperGrids = new Swiper(".swiper-trailer", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
});

function openModal(url) {
  $("#modal").modal("show");
  var iframe = document.getElementById("iframe");
  iframe.src = url;
}
$(document).ready(function () {
  $("#modal").on("hidden.bs.modal", function (e) {
    var iframe = document.getElementById("iframe");
    iframe.src = "";
  });
});

function openInfoModal(id) {
  $("#modalInfo").modal("show");
  var iframe1 = document.getElementById("iframe1");
  iframe1.src = "https://www.youtube.com/embed/" + id;
  var iframe2 = document.getElementById("iframe2");
  iframe2.src = "https://www.youtube.com/embed/" + id;
  var iframe3 = document.getElementById("iframe3");
  iframe3.src = "https://www.youtube.com/embed/" + id;
}

$("#modalInfo").on("shown.bs.modal", function () {
  var swiperModal = new Swiper(".swiper-my", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(document).ready(function () {
  $("#modalInfo").on("hidden.bs.modal", function (e) {
    var iframe1 = document.getElementById("iframe1");
    iframe1.src = "";
    var iframe2 = document.getElementById("iframe2");
    iframe2.src = "";
    var iframe3 = document.getElementById("iframe3");
    iframe3.src = "";
  });
});
