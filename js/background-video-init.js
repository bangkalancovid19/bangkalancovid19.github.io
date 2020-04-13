// Video Init
$(document).ready(function () {
  if (!($("html").hasClass("mobile"))) {
    var html5_video = new $.backgroundVideo($('#html5-video'), {
      "align": "centerXY",
      "width": 1780,
      "height": 1020,
      "path": "assets/video/",
      "filename": "Travaho",
      "types": ["mp4", "ogg", "webm"],
      "autoplay": true,
      "loop": true
    });
  }
});