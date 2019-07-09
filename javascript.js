$('.items').click(function (){
    $(this).toggleClass('hidden');
    $('.items').not(this).addClass('hidden');
});