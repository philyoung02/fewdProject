$('.items').click(function (){
    alert('hi');
    var $target = $(this).closest('.timeline-card').removeClass('hidden');
    $('timeline-card').not($target).toggleClass('hidden');
});