$(document).ready(function () {


var $target = $('.wrapper');

inView('.section').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});


});

// window.onload = $(".firstPage").css('background-color', '#D1DCBC' );
// // });
