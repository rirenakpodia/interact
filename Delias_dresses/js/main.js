$(window).load(function(){
  $("#page").show();
  start();
});
$(function(){
  
  // place links for shop button
  // royal blues, gold dust, hot spots, silver shimmer, the lbd
  var shopLinks = ["#link1","#link2","#link3","#link4","#link5"];
  
  
  $("#page").hide();
  var dresses = [$("#dress-1"), 
                 $("#dress-2"),
                 $("#dress-3"),
                 $("#dress-4"),
                 $("#dress-5")],
      shop = $("#shop"),
      stars = $("#stars1"),
      index = 0,
      current,
      animating = false, 
      currDress,
      autoTimeout,
      autoInterval;
 
  for (var i = 0; i < dresses.length; i++){
    
    dresses[i].children("div").fadeOut(0);
  }
  stars.fadeOut(0);
  shop.fadeOut(0);
  dresses[0].show();
  current = dresses[0];
  
  window.start = function(){
    animateIn(current);
    doAuto();
  };
  
  
  $(document).mousemove(function(){
    clearTimeout(autoInterval);
    clearTimeout(autoTimeout);
    autoTimeout = setTimeout(doAuto, 5000);
  });
  
  function doAuto(){
    autoInterval = setInterval(function(){
      $("#arrow-right").trigger("click");
    }, 6000);
  };
  
  $("#arrow-left").click(function(){
    if (animating) return;
      index--;
    if (index < 0) index = 4;
    animate();
  }).css({opacity : 0}).delay(200).animate({opacity : 0.5})
    .hover(function(){
      $(this).stop().animate({opacity : 1});
    }, function(){
      $(this).stop().animate({opacity : 0.5});
    });
  
  $("#arrow-right").click(function(){
    if (animating) return;
      index++;
    if (index > 4) index = 0;
    animate();
  }).css({opacity : 0}).delay(200).animate({opacity : 0.5})
    .hover(function(){
      $(this).stop().animate({opacity : 1});
    }, function(){
      $(this).stop().animate({opacity : 0.5});
    });
  
  function animateOut(target){
    var children = target.children();
    var dress = children.first();
    var title = children.last();
    title.delay(900).fadeOut();
    dress.delay(700).fadeOut();
    stars.delay(200).fadeOut();
    shop.fadeOut();
    var arr = [1,2,3,4,5,6,7,8,9];
    arr.sort(function(a, b){ 
      return parseInt(Math.random() * 8 - 4);
    });
    children.each(function(i){
      if (i > 0 && i < 10){
        $(this).delay(80 * arr[i]).fadeOut(); 
      }
    });
  }
  function animateIn(target){
    
    var children = target.children();
    var dress = children.first();
    currDress = dress;
    var title = children.last();
    shop.delay(600).fadeIn();
    stars.delay(500).fadeIn();
    title.delay(200).fadeIn();
    dress.delay(400).fadeIn();
    children.each(function(i){
      if (i > 0 && i < 10){
        $(this).delay(400 + Math.random() * 1000).fadeIn(); 
      }
    });
  }
  function animate(){
    animating = true
      if (current){
        animateOut(current);
      } 
    current = dresses[index];
    setTimeout(function(){
      animateIn(current);
    }, 700);
    setTimeout(function(){
      animating = false;
    },2000);
  }
  
  function wiggle(){
    setTimeout(wiggle, 4000 + Math.random() * 4000);
    if (!currDress) return;
      
      TweenLite.to(currDress, 0.15, {rotation: 1 + Math.random()});
    TweenLite.to(currDress, 0.15, {rotation: -(1 + + Math.random()), delay : 0.15});
    TweenLite.to(currDress, 0.15, {rotation: (1 + + Math.random()), delay : 0.3});
    TweenLite.to(currDress, 0.15, {rotation: -(1 + + Math.random()), delay : 0.45});
    
  }
  
  setTimeout(wiggle, 200);
  
  
  
  $("#shop").click(function(){
    if (animating) return;
      window.location.href = shopLinks[index];
  });
  
});