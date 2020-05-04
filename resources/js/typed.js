import Typed from 'typed.js';

var options = {
    strings: ['a Software Engineer', 'a DevOps enthusiast', 'a computer geek'],
    typeSpeed: 50,
    starDelay: 200,
    backDelay: 600,
    loop: true,
    showCursor: true,
    cursorChar: "|"
};

var typed = new Typed('.intro-section__typed-text', options);
