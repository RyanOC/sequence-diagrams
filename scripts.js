
$(function() {
  Render();
});

$('#seqText').on('input', function (e) {
    delay(function(){
      Render();
    }, 1000 );   
});

function Render(){
  $('.diagram').html($('#seqText').val());
  $(".diagram").sequenceDiagram({theme: 'hand'});
}

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();