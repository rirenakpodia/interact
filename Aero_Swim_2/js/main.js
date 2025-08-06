$(window).load(function(){
  
  $("#frame").show();
  
  var rightArrow = $("#right-arrow"),
      leftArrow = $("#left-arrow"),
      top = $("#top"), 
      bottom = $("#bottom"),
      index = 0, 
      animating = false, 
      speed = 1.5, 
      ease = Cubic.easeInOut;
  
  
  //leftArrow.hide();
  
  rightArrow.click(function(){
    if (animating == true) return;
      animating = true;
    index++;
    if (index == 1){
      //leftArrow.fadeIn(); 
    }else if (index == 4){
      //rightArrow.fadeOut(); 
    }
    TweenLite.to(top, speed, {left :  -index * 800, 
                              ease : ease,
                              onComplete : adjustTop});
    TweenLite.to(bottom, speed, {left :  -4000 - index * 800, 
                                 ease : ease,
                                 onComplete : adjustBottom});
  });
  
  leftArrow.click(function(){
    if (animating == true) return;
      animating = true;
    index--;
    if (index == 0){
      //leftArrow.fadeOut(); 
    }else if (index == 3){
      //rightArrow.fadeIn();
    }
    TweenLite.to(top, speed, {left :  -index * 800, 
                              ease : ease,
                              onComplete : adjustTop});
    TweenLite.to(bottom, speed, {left :  -4000 - index * 800,
                                 ease : ease,
                                 onComplete : adjustBottom});
  });
  
  function adjustBottom(){
    if (index < 0) index = 4;
    if (index > 4) index = 0;
    bottom.css({
      left : -index * 800
    }); 
  }
  function adjustTop(){
    if (index < 0) index = 4;
    if (index > 4) index = 0;
    top.css({
      left : -index * 800 - 4000
    }); 
    animating = false;
  }
  
  
});