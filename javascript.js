//General variables
let numberKm,agePassenger,normalPrice,minorsPrice,over65Price,finalPrice,message;
//Constant
const pricePerKm = 0.21;
const hamburger = document.getElementById('submit');

console.log(hamburger)


submit.addEventListener('click',
    function () {

        
    }
)


//Ask Number Km
numberKm = prompt("How many km do you wanna do?");
console.log(numberKm)


// Ask Age Passenger
agePassenger = prompt("How old are you?");
console.log(agePassenger);

//Calculate Normal Price
normalPrice = numberKm * pricePerKm;
console.log(normalPrice)


//CONDITIONS

//Discount minors 20%
if (agePassenger < 18) {
    minorsPrice = normalPrice - ((20 / 100) * normalPrice);
    console.log(minorsPrice);
    message = `Your Special price is $ ${minorsPrice.toFixed(2)}`;
    console.log(message);
    document.getElementById("tot-price").innerHTML = message;
}

//Over 65 Price
else if (agePassenger > 65) {
    over65Price = normalPrice - ((40 / 100) * normalPrice);
    console.log(over65Price)
    message = `Your Super-Special price is $ ${over65Price.toFixed(2)}`;
    console.log(message);
    document.getElementById("tot-price").innerHTML = message;
}

//Normal Price mannaggia tutto 
else {
    finalPrice = normalPrice;
    message = `Your total price is $ ${finalPrice.toFixed(2)}`;
    console.log(message);
    document.getElementById("tot-price").innerHTML = message;
}


