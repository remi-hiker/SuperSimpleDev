const button = document.querySelector('.js-button');
const hasClass = button.classList.contains('js-button');


console.log(hasClass);

function toggleButton(selector) {
    const ButtonElement = document.querySelector(selector);
    if(ButtonElement.classList.contains('is-toggled')) {
        ButtonElement.classList.remove('is-toggled');
    }//This turns the button off if it is on
    else {
        ButtonElement.classList.add('is-toggled');
    }//This turns the button on if it is off
}

/*
        function toggleMusicButton() {
            const musicButtonElement = document.querySelector('.js-music-button');
            if(musicButtonElement.classList.contains('is-toggled')) {
                musicButtonElement.classList.remove('is-toggled');
            }//This turns the button off if it is on
            else {
                musicButtonElement.classList.add('is-toggled');
            }//This turns the button on if it is off
        }

        function toggleTechButton() {
            const techButtonElement = document.querySelector('.js-tech-button');
            if(techButtonElement.classList.contains('is-toggled')) {
                techButtonElement.classList.remove('is-toggled');
            }
            else {
                techButtonElement.classList.add('is-toggled');
            }//This turns the button on if it is off
    }*/