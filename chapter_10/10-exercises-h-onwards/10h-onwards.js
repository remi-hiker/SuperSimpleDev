function handleCostKeyDown(event) {
    if(event.key === 'Enter') {
    calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    if(cost < 0) {
        document.querySelector('.js-total-cost')
        .innerHTML = ``;
        
        document.querySelector('.js-error-message')
            .innerHTML = 'Error: cost cannot be lower than $0';
    }

    if(0 < cost && cost < 40) {
        cost = cost + 10;
        document.querySelector('.js-total-cost')
            .innerHTML = `$${cost}`;

        document.querySelector('.js-error-message')
            .innerHTML = '';
    }

    
}