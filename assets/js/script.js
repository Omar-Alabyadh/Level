$(function () {
  // Start Datepicker
  $("#inputCheckIn").datepicker();
  $("#inputCheckOut").datepicker();
  // End Datepicker

  // Start Slick Slider
  $(".level-slider").slick({
    dots: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: true,
    fade: true,
  });
  // End Slick Slider

  // Start Video Section
  function videoToggle() {
    video = $(".level-video").get(0);

    if (video.paused) {
      video.play();
      $(".video-control-play").hide();
      $(".video-control-pause").show();
    } else {
      video.pause();
      $(".video-control-pause").hide();
      $(".video-control-play").show();
    }
  }

  $(".video-control-play").click(function () {
    videoToggle();
  });

  $(".video-control-pause").click(function () {
    videoToggle();
  });
  // End Video Section
});
