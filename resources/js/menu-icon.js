document.querySelectorAll('.menu-icon').forEach(button => button.addEventListener('click', toggle));

function toggle() {
    let btn = this;
    let middleBar = document.querySelector('.menu-icon__middle-bar');
    btn.classList.add('is-animated');
    middleBar.classList.add('is-animated');
    btn.classList.toggle('is-active');
    middleBar.classList.toggle('is-active');
    let newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', toggle);
    let newMiddleBar = middleBar.cloneNode(true);
    middleBar.parentNode.replaceChild(newMiddleBar, middleBar);
}
