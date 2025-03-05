const button = document.querySelector('.js-button');
const hasClass = button.classList.contains('js-button');


console.log(hasClass);

function toggleButton(selector) {
    const ButtonElement = document.querySelector(selector);
    
    if(!ButtonElement.classList.contains('is-toggled')) {
        
        turnOffPreviousButton();
        
        ButtonElement.classList.add('is-toggled');
    }//This turns the button on if it is off
    else {
        ButtonElement.classList.remove('is-toggled');
    }//This turns the button off if it is on
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}