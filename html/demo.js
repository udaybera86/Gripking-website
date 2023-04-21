
const main = document.getElementById('main');
const article = document.getElementById('article');

const mainDiv = document.getElementById('mainDiv')
const tas = document.querySelector('.tas')
const tas2 = document.querySelector('.tas2')
const GS2 = document.querySelector('.GS2')
const fash2 = document.querySelector('.fash2')
const fash2b = document.querySelector('.fash2b')
const fash3 = document.querySelector('.fash3')
const fash3b = document.querySelector('.fash3b')
const fash4 = document.querySelector('.fash4')
const fash4b = document.querySelector('.fash4b')
const fash5 = document.querySelector('.fash5')
const fash5b = document.querySelector('.fash5b')
const fash6 = document.querySelector('.fash6')
const fash6b = document.querySelector('.fash6b')
const fash7 = document.querySelector('.fash7')
const fash7b = document.querySelector('.fash7b')
const fash8 = document.querySelector('.fash8')
const fash8b = document.querySelector('.fash8b')

// setTimeout (() => {
//     main.style.display = 'flex';
//     article.style.display = 'none';
// }, 5500);

var timesClicked = 0;

$("#section").mouseup(function() {
    timesClicked++;
    console.log(((timesClicked - 1) % 5 === 0))

    if (timesClicked === 1 ||  ((timesClicked - 1) % 5 === 0)) {
        tas.classList.add('tas_animate');
        tas2.classList.add('tas2_animate');
        GS2.classList.add('GS2_animate');
        fash2.classList.add('fash2_animate');
        fash3.classList.add('fash3_animate');
        fash4.classList.add('fash4_animate');
        fash5.classList.add('fash5_animate');
        fash6.classList.add('fash6_animate');
        fash7.classList.add('fash7_animate');
        fash8.classList.add('fash8_animate');
    } else if (timesClicked === 2 ||  ((timesClicked - 2) % 5 === 0)) {
        main.classList.add('main_animate');
    } else if (timesClicked === 3 ||  ((timesClicked - 3) % 5 === 0)) {
        article.classList.add('article_animate');
        setTimeout (() => {
            mainDiv.style.display = 'flex';
            main.style.display = 'none';
           }, 1600);
    } else if (timesClicked === 4 ||  ((timesClicked - 4) % 5 === 0)) {
        mainDiv.classList.add('mainDiv_animate');
        fash2b.classList.add('fash2b_animate');
        fash3b.classList.add('fash3b_animate');
        fash4b.classList.add('fash4b_animate');
        fash5b.classList.add('fash5b_animate');
        fash6b.classList.add('fash6b_animate');
        fash7b.classList.add('fash7b_animate');
        fash8b.classList.add('fash8b_animate');
        tas.classList.remove('tas_animate');
        tas2.classList.remove('tas2_animate');
        tas.classList.add('.tas_return_animate');
        GS2.classList.remove('GS2_animate');
    } else if (timesClicked === 5 ||  ((timesClicked - 5) % 5 === 0)) {
        article.classList.remove('article_animate');
        fash2.classList.remove('fash2_animate');
        fash3.classList.remove('fash3_animate');
        fash4.classList.remove('fash4_animate');
        fash5.classList.remove('fash5_animate');
        fash6.classList.remove('fash6_animate');
        fash7.classList.remove('fash7_animate');
        fash8.classList.remove('fash8_animate');
        main.classList.remove('main_animate');
        mainDiv.classList.remove('mainDiv_animate');
        fash2b.classList.remove('fash2b_animate');
        fash3b.classList.remove('fash3b_animate');
        fash4b.classList.remove('fash4b_animate');
        fash5b.classList.remove('fash5b_animate');
        fash6b.classList.remove('fash6b_animate');
        fash7b.classList.remove('fash7b_animate');
        fash8b.classList.remove('fash8b_animate');
            mainDiv.style.display = 'none';
            main.style.display = 'flex';
    } 
});