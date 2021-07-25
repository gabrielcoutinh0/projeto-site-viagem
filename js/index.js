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