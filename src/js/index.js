const prev = document.getElementById('prev');
const next = document.getElementById('next');

const firstImg = document.getElementById('first-img');
const firstText = document.getElementById('first-text');

const secondImg = document.getElementById('second-img');
const secondText = document.getElementById('second-text');

prev.addEventListener('click', () => {
    var imgDis = firstImg.style.display;
    if(imgDis === '') {
        firstImg.style.display = 'none';
        firstText.style.display = 'none'
        secondImg.style.display = 'inline';
        secondText.style.display = 'block'
    } else if(imgDis === 'none') {
        firstImg.style.display = 'inline';
        firstText.style.display = 'block'
        secondImg.style.display = 'none';
        secondText.style.display = 'none'
    } else if(imgDis === 'inline') {
        firstImg.style.display = 'none';
        firstText.style.display = 'none'
        secondImg.style.display = 'inline';
        secondText.style.display = 'block';
    }
});
next.addEventListener('click', () => {
    var imgDis = firstImg.style.display;
    if(imgDis === '') {
        firstImg.style.display = 'none';
        firstText.style.display = 'none'
        secondImg.style.display = 'inline';
        secondText.style.display = 'block'
    } else if(imgDis === 'none') {
        firstImg.style.display = 'inline';
        firstText.style.display = 'block'
        secondImg.style.display = 'none';
        secondText.style.display = 'none'
    } else if(imgDis === 'inline') {
        firstImg.style.display = 'none';
        firstText.style.display = 'none'
        secondImg.style.display = 'inline';
        secondText.style.display = 'block';
    }
});









// REFERENCE

// const modal = document.getElementById('modal');
// const btn = document.getElementById('share_btn');
// const dos = modal.style.display;
// console.log(dos);

// btn.addEventListener('click', () => {
//     var dis = modal.style.display;
//     if(dis === "") {
//         modal.style.display = 'flex';
//     } else if(dis === 'flex') {
//         modal.style.display = 'none';
//     } else {
//         modal.style.display = 'flex';
//     }
// });