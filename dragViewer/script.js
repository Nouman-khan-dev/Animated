document.querySelector('#main').addEventListener('mousemove', (e) => {
    document.querySelector('.forground').style.width =
        e.clientX + 'px';
});
