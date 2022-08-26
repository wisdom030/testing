$(document).ready(function() {
  $(".subMenu").hide();
  $("nav").mouseover(function() {
    $(".subMenu").stop().slideDown(300);
  }).mouseout(function() {
    $(".subMenu").stop().slideUp(300);
  });

  $(".search").click(function() {
    $(".searchWrap").addClass("active");
  });
  $(".btn").click(function() {
    $(".searchWrap").removeClass("active");
  });

  var imgs = 2;
  var now = 0;

  start();

  function start() {
    $(".imgSlide > a").eq(0).siblings().animate({width:"-1920px"});

    setInterval(function() {
      now = now == imgs ? 0 : now += 1;
      $(".imgSlide > a").eq(now - 1).animate({width:"-1920px"});
      $(".imgSlide > a").eq(now).animate({width:"1920px"});
    }, 5000);
  }
});

$(window).resize(function(){ 
  if (window.innerWidth > 1024) {  

    $(".plus").click(function() {
      $(".plus").hide();
      $(".liveBox02").show();
      $("footer").offset({top:"2650"});
    });

  } else {

    $(".plus").click(function() {
      $(".plus").hide();
      $(".liveBox02").show();
      $("footer").offset({top:"2000"});
    });
  
  }
  
  }).resize();
