$(function () {
    $('.menu__btn-open').click(function () {
        $('.menu__links').css({
            transform: 'translateX(0%)',
            opacity: '1'
        })
        $('.menu__box').css({
            transform: 'translateY(0%)'
        })
    });
    $('.menu__btn-close').click(function () {
        $('.menu__links').css({
            transform: 'translateX(500%)',
            opacity: '0'
        })
        $('.menu__box').css({
            transform: 'translatey(-100%)'
        })
        setTimeout(() => {
            $('.menu__links').css({
                transform: 'translateX(-100%)'
            })
        }, 700);
    });


    $('.menu__box').click(function () {
        $('.menu__links').css({
            transform: 'translateX(500%)',
            opacity: '0'
        })
        $('.menu__box').css({
            transform: 'translatey(-100%)'
        })
    });



    $('.new__menu').hide();
    $('.new__menu-open').click(function () {
        setTimeout(() => {
            $('.new__menu').css({
                opacity: '0'
            })
        }, 100);
        setTimeout(() => {
            $('.new__menu').css({
                opacity: '1'
            })
        }, 800);
        $('.new__menu').slideToggle(1000);
    });
    $('.open__order').click(function () {
        $('.father__order').css({
            display: 'block'
        })
        setTimeout(() => {
            $('.father__order').css({
                opacity: '1'
            })
        }, 500);
        setTimeout(() => {
            $('.father__order').css({
                opacity: '0.5'
            })
        }, 250);
        setTimeout(() => {
            $('.father__order').css({
                opacity: '0.25'
            })
        }, 100);
        setTimeout(() => {
            $('.father__order').css({
                opacity: '0.75'
            })
        }, 400);
    });
    $('.exit__order').click(function () {
        setTimeout(() => {
            $('.father__order').css({
                opacity: '0',
                display: 'none'
            })
        }, 500);
        setTimeout(() => {
            $('.father__order').css({
                opacity: '0.25'
            })
        }, 400);
        setTimeout(() => {
            $('.father__order').css({
                opacity: '0.5'
            })
        }, 250);
        setTimeout(() => {
            $('.father__order').css({
                opacity: '0.75'
            })
        }, 100);

    });


})