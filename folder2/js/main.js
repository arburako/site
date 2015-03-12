(function() {
  $(function() {
    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
      slidesColor: ["#00a4e0", "#DE564B", "#1acfa7", "#333", "#f19539"],
      slidesNavigation: true,
      scrollingSpeed: 700,
      keyboardScrolling: true,
      touchSensitivity: 10,
      continuousVertical: false,
      animateAnchor: true,
      afterLoad: function(anchorLink) {
        if (anchorLink === "secondPage") {
          $(".magic").addClass("animated bounceInLeft");
          $(".trophy").addClass("animated bounceInUp");
          return $(".users").addClass("animated bounceInRight");
        }
      }
    });
    $("#menu").click(function() {
      $('.menu-bars').toggleClass("open");
      return $(".overlay").toggleClass("open");
    });
    return $(".overlay ul li a").click(function() {
      $(".overlay").removeClass("open");
      return $('.menu-bars').removeClass("open");
    });
  });

}).call(this);
