const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-nav");

menuBar.addEventListener('click', function(){
    menuNav.classList.toggle("menu-active")
});

const infoViews = document.querySelectorAll('product__info');
const infoBtns = document.querySelectorAll('product__button');
const infoCloses = document.querySelectorAll('product__info-close');

let info = function(modalClick){
    infoViews[modalClick].classList.add('active-info')
}

infoBtns.forEach ((infoBtn, i) => {
    infoBtn.addEventListener('click', () => {
        info(i)
    })
})

infoCloses.forEach((infoClose) => {
    infoBtns.addEventListener ('click', () => {
        infoViews.forEach((infoView) => {
            infoView.classList.remove('active-info')
        })
    })
})