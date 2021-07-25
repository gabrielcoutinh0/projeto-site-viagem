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

function screenUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function buttonScroll(){
    if(window.scrollY <= 200){
        document.querySelector('.scrollbutton').style.display = 'none';
    }else{
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', buttonScroll);