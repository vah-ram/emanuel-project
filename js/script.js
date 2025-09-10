
const topBtn = document.querySelector('.about__to-top-btn');
const toTopBtnMobile = document.querySelector('.about__btn-to-top');

topBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

toTopBtnMobile.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
   if(window.scrollY !== 0) {
        topBtn.classList.add('is-fixed');
   } else {
        topBtn.classList.remove('is-fixed');
   }
});
