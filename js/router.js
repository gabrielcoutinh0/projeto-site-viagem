window.addEventListener('load', handlerButton);

function handlerButton(){
    let standardButton = document.querySelector('#container #standard #bt-standard');
    let essentialsButton = document.querySelector('#container #essentials #bt-essentials');
    let premiumButton = document.querySelector('#container #premium #bt-premium');

    let buttonsElements = [];
    buttonsElements.push(standardButton, essentialsButton, premiumButton);

    buttonsElements.map((element) => {
        handlerRouter(element);
    });
}

function handlerRouter(element){
    element.addEventListener('click', () => {
        window.location.assign('../view/checkout.html');
        localStorage.planType = element.value;
    });
}