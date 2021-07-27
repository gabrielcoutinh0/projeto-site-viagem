window.addEventListener('load', activeToggle);

function activeToggle(){
    let menuToggle = document.querySelector('#container .menu-toggle-container');
    let menuNav = document.querySelector('#container .menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menuNav.classList.toggle('active');
    });

    disableToggle();
}

function disableToggle(){
    let linkDestinations = document.querySelector('#container #a-destinations');
    let linkPrices = document.querySelector('#container #a-prices');

    let links = [];
    links.push(linkDestinations, linkPrices);

    links.map((element) => {
        eventDisable(element);
    });
}

function eventDisable(element){
    element.addEventListener('click',() => {
        let menuToggle = document.querySelector('#container .menu-toggle-container');
        let menuNav = document.querySelector('#container .menu');

        menuToggle.classList.toggle('active');
        menuNav.classList.toggle('active');
    });
}

/*function screenUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}*/

function buttonScroll(){
    if(window.scrollY <= 200){
        document.querySelector('.scrollbutton').style.display = 'none';
    }else{
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', buttonScroll);

function smoothScroll(target, duration){
    target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top;
    let startPostion = window.pageYOffset;
    let distance = targetPosition - startPostion;
    let startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPostion, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(time, start, distance, duration){
        time /= duration / 2;
        if(time < 1) return distance / 2 * time * time + start;
        time--;
        return -distance / 2 * (time * (time - 2) -1) + start;
    }

    requestAnimationFrame(animation);
}

let destinations = document.querySelector('#a-destinations');
let prices = document.querySelector('#a-prices');
let scrollbutton = document.querySelector('.scrollbutton');

destinations.addEventListener('click', () => {
    smoothScroll('#destinations', 1000);
});

prices.addEventListener('click', () => {
    smoothScroll('#prices', 1000);
});

scrollbutton.addEventListener('click', () => {
    smoothScroll('.logo', 1000);
});