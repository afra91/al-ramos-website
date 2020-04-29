$('.menu-icon__wrapper').click(function() {
    $('.menu-icon__wrapper').css('pointer-events', 'none');
    var navWrapper = $('.nav__wrapper');

    navWrapper.toggleClass('menu-icon__wrapper--active');
    if (navWrapper.hasClass('menu-icon__wrapper--active')) {
        navWrapper.velocity('transition.slideLeftIn', {
            duration: 300,
            delay: 0,
            begin: function() {
                $('.nav__li').velocity('transition.perspectiveLeftIn', {
                    stagger: 150,
                    delay: 0,
                    complete: function() {
                        $('.nav__link').velocity({
                            opacity: [1, 0],
                        }, {
                            delay: 10,
                            duration: 140
                        });
                        $('.menu-icon__wrapper').css('pointer-events', 'auto');
                    }
                })
            }
        })

    } else {
        $('.menu-icon__wrapper').css('pointer-events', 'none');
        $('.nav__li').velocity('transition.perspectiveRightOut', {
            stagger: 150,
            delay: 0,
            complete: function() {
                navWrapper.velocity('transition.fadeOut', {
                    delay: 0,
                    duration: 300,
                    complete: function() {
                        $('.nav__link').velocity({
                            opacity: [0, 1],
                        }, {
                            delay: 0,
                            duration: 50
                        });
                        $('.menu-icon__wrapper').css('pointer-events', 'auto');
                    }
                });
            }
        })
    }
})
