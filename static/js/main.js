$(document).ready(function () {
  $(".menu-item a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      if ($(hash).offset()?.top !== undefined) {
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    }
  });
  $(window).scroll(function () {
    let database = $("#database").offset().top;
    let skin_disease = $("#skin-disease").offset().top;
    let predict_now = $("#predict-now").offset().top;

    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scrollTop + 80 >= database) {
      $(".nav-menu-item").removeClass("menu-active");
      $(".nav-menu-item.database").addClass("menu-active");
    }
    if (scrollTop + 80 >= skin_disease) {
      $(".nav-menu-item").removeClass("menu-active");
      $(".nav-menu-item.skin-disease").addClass("menu-active");
    }
    if (scrollTop + 80 >= predict_now) {
      $(".nav-menu-item").removeClass("menu-active");
      $(".nav-menu-item.predict-now").addClass("menu-active");
    }
  });

  const owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoPlaySpeed: 8000,
    autoplayHoverPause: true,
  });

  $(".c-owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".c-owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
