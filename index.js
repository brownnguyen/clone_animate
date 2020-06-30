$(function(){

    $('.header__bar').on('click', function(){
    if(!$(this).is('.active')) {
        $(this).addClass('active');
        $('.header__nav').addClass('active');
    } else {
        $(this).removeClass('active');
        $('.header__nav').removeClass('active');
    }
})

$(window).on('load scroll',function() {
    if(window.scrollY > 0) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
    if(document.documentElement.scrollTop > (document.documentElement.offsetHeight- window.innerHeight)/2) {
        $('#backTop').addClass('active');
    } else {
        $('#backTop').removeClass('active');
    }
    scrollToElement('.education__schedule__year', 'draw');
    scrollToElement2('.cv__candidate', 'draw');
});
$('.qa_area__list__question').on('click', function(){
    if($(this).parent().is('.expand')){
        $(this).parent().removeClass('expand');
        $(this).next().css('height','0px');
    }else{
        $(this).parent().addClass('expand');
        $(this).next().css('height',`${$(this).next().children().outerHeight()}px`);
    }
});

function scrollToElement(classFirst, nameClassAdd) {
    $(classFirst).each(function() {
        var spaceTop = $(this).offset().top;
        var chieucao = $(this).height();
        var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
        var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
        var scrollSpaceTop = $(window).scrollTop();
        if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop + (chieucao / 2) < scrollSpaceTop + $(window).height())) {
            
            $(this).children(0).addClass(nameClassAdd);

            if($(this).children(0).hasClass(nameClassAdd)){
                $(this).children(1).addClass(nameClassAdd);
                $(this).next().children(0).addClass(nameClassAdd);
                $(this).next().children(1).addClass(nameClassAdd);
            }
        }
    });
}
function scrollToElement2(classFirst, nameClassAdd) {
    $(classFirst).each(function() {
        var spaceTop = $(this).offset().top;
        var chieucao = $(this).height();
        var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
        var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
        var scrollSpaceTop = $(window).scrollTop();
        if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop + (chieucao / 2) < scrollSpaceTop + $(window).height())) {
            
            $(this).children(0).addClass(nameClassAdd);

            if($(this).children(0).hasClass(nameClassAdd)){
                $(this).children(1).addClass(nameClassAdd);
            }
        }
    });
}


});

$('#backTop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 'slow');
})

$(".sectionPrimary__ul > li").on('click', function(){
    if(!$('.modal__container').eq($(this).data('order')).is('.active')) {
        $('.modal').addClass('active');
        $('.modal__container').removeClass('active');
        $('.modal__container').eq($(this).data('order')).addClass('active');
    }
});
$('.modal__cross').on('click', function(){
    $('.modal__container').removeClass('active');
    $('.modal').removeClass('active');
})