$(document).ready(function() {

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

  } if (window.innerWidth > 768) {

    $(".plus").click(function() {
      $(".plus").hide();
      $(".liveBox02").show();
      $("footer").offset({top:"2000"});
    });

  } else {
    $(".Mplus").click(function() {
      $(".Mplus").hide();
      $(".MliveBox02").show();
      $("footer").offset({top:"1900"});
    });
    
  }
  
  }).resize();






  $(window).resize(function(){
    if (window.innerWidth > 768) {  
      $(".subMenu").hide();
      $("nav").mouseover(function() {
        $(".subMenu").stop().slideDown(300);
      }).mouseout(function() {
        $(".subMenu").stop().slideUp(300);
      });
    
  } else {
    $(".navi").hide();
    $(".naviSub").hide();
    $("#menu").click(function() {
      $(".navi").show();
      $(".navi").click(function() {
        $(this).next(".naviSub").stop().slideToggle(300);
        $(this).toggleClass("on").siblings().removeClass("on");
        $(this).next(".naviSub").siblings(".naviSub").slideUp(300);
      });
    });
  }
  }).resize();
  
  