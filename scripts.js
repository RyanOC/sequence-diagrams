
$(function() {
  $(".diagram").sequenceDiagram({theme: 'hand'});
});

$('#seqText').on('input', function (e) {
    var value = $('#seqText').val();
    console.log(value);
    $('.diagram').html(value);
    $(".diagram").sequenceDiagram({theme: 'hand'});
});