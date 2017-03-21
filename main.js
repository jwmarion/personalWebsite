$(document).ready(function () {





$('#fullpage').fullpage({

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

});
