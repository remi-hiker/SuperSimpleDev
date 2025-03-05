//alert('hello')


//concatonation
console.log('some' + ' text')

//informs us about the type of variable
console.log(typeof 2)

//mixing strings and numbers
console.log('$' + Number((20.95 + 7.99).toFixed(2)))

console.log('$' + (2095 + 799)/100);

console.log('Items (' + (1 + 1) + '): $' + (2095 + 799)/100);

//Displayed within the popup 
alert('Items (' + (1 + 1) + '): $' + (2095 + 799)/100);

// \n creates a new line
alert("Some days\n When I'm awfully low");

/// Using backticks
// Interpolation - The ${} allows us to immediately insert things into the string without all the faf.
// Interpolation is amich cleaner approach to editing our strings
///

console.log(`Items (${1 + 1}): $${((2095 + 799)/100)}`)

//Multiline sting
console.log(`some
    text`);

let name = 'sam'
console.log('my name is ' + name)

let totalCost = `Total cost: $${5 + 3}`
console.log(totalCost)

totalCost = 'Total Cost: $' + Number(((599 + 295)/100).toFixed(2))
console.log(totalCost)
alert(totalCost + '\nThank you, come again!')

let basketball = (2095)/100
let basketballQuantity = 2
let basketballShipping = (499)/100
let tShirt = (799)/100
let tShirtQuantity = 2
let tShirt_shipping =(499)/100

let totalBasketballCost = Number((basketball * basketballQuantity) + (tShirt * tShirtQuantity)).toFixed(2)
let totalShippingCost = Number(((basketballShipping)+(tShirt_shipping)).toFixed(2))
let totalBeforeCost = Number(Number(totalBasketballCost) + Number(totalShippingCost))

amazonReceipt = `Items (${basketballQuantity + tShirtQuantity}): $${totalBasketballCost}
Shipping & handling: $${totalShippingCost}

Total before tax: $${totalBeforeCost}
Estimated tax (10%): $${((Number(totalBeforeCost))/10).toFixed(2)}`
alert(amazonReceipt)