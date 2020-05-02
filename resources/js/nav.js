import velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui.min.js';

let menuIconWrapper = document.querySelector('.menu-icon__wrapper');
let navWrapper = document.querySelector('.nav__wrapper');
let navLi = document.querySelectorAll('.nav__li');
let navLink = document.querySelectorAll('.nav__link');

menuIconWrapper.addEventListener('click', function() {
    menuIconWrapper.style.pointerEvents = 'none';

    navWrapper.classList.toggle('is-active');
    if (navWrapper.classList.contains('is-active')) {
        Velocity(navWrapper, 'transition.slideLeftIn', {
            duration: 300,
            delay: 0,
            begin: function() {
                Velocity(navLi, 'transition.perspectiveLeftIn', {
                    stagger: 150,
                    delay: 0,
                    complete: function() {
                        Velocity(navLink, {
                            opacity: [1, 0],
                        }, {
                            delay: 10,
                            duration: 140
                        });
                        menuIconWrapper.style.pointerEvents = 'auto';
                    }
                })
            }
        })

    } else {
        menuIconWrapper.style.pointerEvents = 'none';
        Velocity(navLi, 'transition.perspectiveRightOut', {
            stagger: 150,
            delay: 0,
            complete: function() {
                Velocity(navWrapper, 'transition.fadeOut', {
                    delay: 0,
                    duration: 300,
                    complete: function() {
                        Velocity(navLink, {
                            opacity: [0, 1],
                        }, {
                            delay: 0,
                            duration: 50
                        });
                        menuIconWrapper.style.pointerEvents = 'auto';
                    }
                });
            }
        })
    }
})
