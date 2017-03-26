$(document).ready(function () {

  $('#fullpage').fullpage({
    anchors:['page1','page2','page3','page4'],
    controlArrows:false,
    onLeave: function(index, nextIndex, direction) {
      if(index == 2 && direction =='up'){
        console.log('test');
  		}
      else {
        TweenLite.to($('.bubbleWave'), 1, {
          top: -50,
          right:0
        });
      }
    }
  });
  $('.projects').on('click','img:nth-of-type(1)', function(){
    $.fn.fullpage.moveTo('page2', 1);
    console.log('yes');
  });
  $('.projects').on('click','img:nth-of-type(2)', function(){
    $.fn.fullpage.moveTo('page2', 2);
    console.log('yes');
  });
  $('.projects').on('click','img:nth-of-type(3)', function(){
    $.fn.fullpage.moveTo('page2', 3);
    console.log('yes');
  });
  $('.pRightBlock').on('click','img:nth-of-type(4)', function(){
    $.fn.fullpage.moveTo('page2', 0);
    console.log('yes');
  });
});
