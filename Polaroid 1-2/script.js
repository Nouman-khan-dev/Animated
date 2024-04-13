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

function camera() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });
    // https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00091.jpg&w=1080&q=90
    function files(index) {
        let data = `
        https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00000.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00001.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00002.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00003.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00004.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00005.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00006.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00007.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00008.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00009.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00010.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00011.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00012.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00013.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00014.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00015.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00016.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00017.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00018.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00019.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00020.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00021.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00022.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00023.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00024.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00025.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00026.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00027.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00028.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00029.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00030.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00031.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00032.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00033.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00034.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00035.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00036.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00037.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00038.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00039.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00040.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00041.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00042.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00043.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00044.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00045.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00046.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00047.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00048.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00049.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00050.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00051.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00052.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00053.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00054.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00055.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00056.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00057.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00058.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00059.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00060.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00061.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00062.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00063.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00064.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00065.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00066.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00067.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00068.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00069.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00070.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00071.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00072.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00073.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00074.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00075.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00076.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00077.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00078.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00079.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00080.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00081.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00082.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00083.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00084.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00085.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00086.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00087.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00088.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00089.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00090.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00091.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00092.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00093.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00094.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00095.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00096.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00097.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00098.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00099.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00100.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00101.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00102.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00103.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00104.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00105.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00106.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00107.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00108.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00109.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00110.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00111.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00112.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00113.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00114.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00115.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00116.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00117.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00118.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00119.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00120.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00121.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00122.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00123.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00124.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00125.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00126.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00127.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00128.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00129.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00130.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00131.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00132.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00133.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00134.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00135.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00136.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00137.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00138.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00139.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00140.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00141.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00142.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00143.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00144.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00145.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00146.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00147.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00148.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00149.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00150.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00151.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00152.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00153.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00154.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00155.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00156.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00157.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00158.jpg&w=1080&q=90
    https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00159.jpg&w=1080&q=90
        `;
        return data.split('\n')[index];
    }

    const frameCount = 169;
    const images = [];
    const imageSeq = {
        frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }
    function scaleImage(img, ctx) {
        let canvas = ctx.canvas;
        let hRatio = canvas.width / img.width;
        let vRatio = canvas.height / img.height;
        let ratio = Math.max(hRatio, vRatio);
        let centerShift_x = canvas.width - (img.width * ratio) / 2;
        let centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    // ---
    function render() {
        scaleImage(images[imageSeq.frame], context);
    }
    images[0].onload = render;

    // ----------------gsap
    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
            scrub: 2,
            trigger: '.part_3 canvas',
            start: 'top 0%',
            end: 'bottom 0%',
        },
        onUpdate: render,
    });
    gsap.to('.part_3 canvas', {
        scrollTrigger: {
            scrub: 2,
            trigger: '.part_3 ',
            start: 'bottom 0%',
            ease: 'none',
        },
    });
    ScrollTrigger.create({
        trigger: '.part_3',
        pin: true,
        start: 'bottom 100%',
    });
}
camera();
// =============================================
// --------------------------------
// function for making links
function get() {
    let arr = [];
    let value = 160;
    let a =
        'https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/0000';
    let b = '.jpg&w=1080&q=90';

    // From 1 to 0;
    for (let i = 0; i < 10; i++) {
        arr.push(a + i + b);
    }
    // 10 to 100
    let c =
        'https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/000';
    for (let i = 10; i < 100; i++) {
        arr.push(c + i + b);
    }
    // 100 plus
    let d =
        'https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00';
    for (let i = 100; i < value; i++) {
        arr.push(d + i + b);
    }
    document.getElementById('data').innerHTML = arr.join('<br>');
    console.log(arr);
}

// --------------------
hamburger.addEventListener('click', () => {
    linksContainer.style.left = 0;
    links_overlay.classList.remove('hide');
});

menuCloseBtn.addEventListener('click', () => {
    linksContainer.style.left = '-70%';

    links_overlay.classList.add('hide');
});
