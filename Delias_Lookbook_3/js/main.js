
$(window).load(function(){
  $("#page").show();
  
});
$(function(){
  
  // alex here are the shopping links in order from left to right:
  
  var links = ["http://link1.com",
               "http://link2.com",
               "http://link3.com",
               "http://link4.com",
               "http://link5.com",
               "http://link6.com",
               "http://link7.com",
               "http://link8.com",
               "http://link9.com",
               "http://link10.com",
               "http://link11.com",
               "http://link12.com"];
             
  
  $("#page").hide();
  
  var link = $("#linker");
  
  var splashB = $("#b1, #b2, #b3, #b4, #b5");
  
  
  var arrowRight = $("#arrow-right"),
      arrowLeft = $("#arrow-left"),
      index = 0,
      sliderContent = $("#slider-content"),
      speed = 0.4,
      ease = Cubic.easeInOut,
      autoInterval,
      autoTimeout;
  
  link.attr("href", links[index]);
  
  $("#slides").fadeOut(0);
  //$("#splash").hide();
  
  $("#title").click(function(){
    $("#splash").fadeOut();
    $("#slides").fadeIn();
    
    autoTimeout = setTimeout(doAuto, 2000);
    $(document).mousemove(function(){
      clearTimeout(autoInterval);
      clearTimeout(autoTimeout);
      autoTimeout = setTimeout(doAuto, 5000);
    }).mouseup(function(){
      clearTimeout(autoInterval);
      clearTimeout(autoTimeout);
      autoTimeout = setTimeout(doAuto, 5000);
    });
    
  });
  
  splashB.css({opacity : 0}).each(function(){
    var el = $(this);
    setTimeout(function(){
      fadeIn(el);
    }, 2000 + Math.random() * 4000);
  });
  
  function fadeOut(el){
    el.animate({opacity : 0}, 800, function(){
      setTimeout(function(){
        fadeIn(el);
      }, 2000 + Math.random() * 4000);
    });
  }
  
  function fadeIn(el){
    el.animate({opacity : 1}, 800, function(){
      setTimeout(function(){
        fadeOut(el);
      }, 2000 + Math.random() * 4000);
    });
  }
  
  
  
  
  
  function doAuto(){
    autoInterval = setInterval(function(){
      arrowRight.trigger("click");
    }, 3000);
  };
  
  arrowRight.click(function(){
    index++;
    TweenLite.to(sliderContent, speed, {left :  -index * 798, 
                                        ease : ease,
                                        onComplete : adjust})
      }).css({opacity : 0}).delay(200).animate({opacity : 0.5})
    .hover(function(){
      $(this).stop().animate({opacity : 1});
    }, function(){
      $(this).stop().animate({opacity : 0.5});
    });
  
  arrowLeft.click(function(){
    index--;
    TweenLite.to(sliderContent, speed, {left :  -index * 798, 
                                        ease : ease,
                                        onComplete : adjust});
  }).css({opacity : 0}).delay(200).animate({opacity : 0.5})
    .hover(function(){
      $(this).stop().animate({opacity : 1});
    }, function(){
      $(this).stop().animate({opacity : 0.5});
    });
  
  function adjust(){
    if (index < 0) index = 11;
    if (index > 11) index = 0;
    link.attr("href", links[index]);
    sliderContent.css({
      left : -index * 798
    }); 
  }
  
  
});