const hamburger = document.querySelector('.hamburger');
const links_overlay = document.querySelector('.links_overlay');
const linksContainer = document.querySelector('.links');
const menuCloseBtn = document.querySelector('.closeBtn');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const body = document.body;

// let lastScroll = 0;
// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll <= 50) {
//         body.classList.add('scroll-up');
//         body.classList.remove('scroll-down');
//         return;
//     }
//     if (
//         currentScroll > lastScroll &&
//         !body.classList.contains('scroll-down')
//     ) {
//         body.classList.remove('scroll-up');
//         body.classList.add('scroll-down');
//     }
//     // else if (
//     //     currentScroll < lastScroll &&
//     //     body.classList.contains('scroll-down')
//     // ) {
//     //     body.classList.remove('scroll-down');
//     //     body.classList.add('scroll-up');
//     // }
//     lastScroll = currentScroll;
// });

// =============================================

convas.width = window.innerHeight;
convas.height = window.innerHeight;

window.addEventListener('resize', () => {
    convas.width = window.innerHeight;
    convas.height = window.innerHeight;
});

function files(index) {
    let data = ``;
}

// =============================================

hamburger.addEventListener('click', () => {
    linksContainer.style.left = 0;
    links_overlay.classList.remove('hide');
});

menuCloseBtn.addEventListener('click', () => {
    linksContainer.style.left = '-70%';

    links_overlay.classList.add('hide');
});
