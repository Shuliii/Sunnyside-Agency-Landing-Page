const navRightSide = document.querySelector('.nav-right-side');
const hamburger = document.querySelector('.hamburger');
const headerContent = document.querySelector('.header-content');

hamburger.addEventListener('click', () => {
    headerContent.classList.toggle('hidden');
    navRightSide.classList.toggle('visible')
})

