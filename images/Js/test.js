
// Function to be called when a card is clicked
function makeBtnClick(card) {
    const cardNameElement = card.querySelector('h2'); // Assuming card name is within the <h2> element
    const cardName = cardNameElement.textContent.trim();

    const priceElement = card.querySelector('h6'); // Assuming price is within the <h6> element
    const priceText = priceElement.textContent.trim();
    const price = parseFloat(priceText);

    if (cardName && !isNaN(price)) {
        serialNumber++;
        addCardToList(serialNumber, cardName, price);
        totalAmount += price;
        updateTotalAmount();
        updateButtons();
    }
}

function updateButtons() {
    const applyCouponButton = document.getElementById('apply-coupon-button');
    const makePurchaseButton = document.getElementById('make-purchase-button');

    if (totalAmount >= 200) {
        applyCouponButton.disabled = false;
    } else {
        applyCouponButton.disabled = true;
    }

    // Enable the "Make Purchase" button if the total amount is greater than 0
    if (totalAmount > 0) {
        makePurchaseButton.disabled = false;
    } else {
        makePurchaseButton.disabled = true;
    }
}



const applyCouponButton = document.getElementById('apply-coupon-button');

applyCouponButton.addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-input').value;

    // Example: Apply a discount of 20% if the coupon code is valid
    if (couponCode === 'SELL200') {
        const discount = totalAmount * 0.2;
        const discountedTotal = totalAmount - discount;

        updateDiscountedTotal(discountedTotal, discount);
        updateButtons();
    }
});



function updateDiscountedTotal(discountedTotal, discount) {
    const discountedTotalElement = document.getElementById('discounted-total');
    const discountAmountElement = document.getElementById('discount-amount');

    discountedTotalElement.textContent = `Discounted Total: ${discountedTotal.toFixed(2)} TK`;
    discountAmountElement.textContent = `Discount: ${discount.toFixed(2)} TK`;
}








// Add the clicked card to the list
function addCardToList(serialNumber, cardName, price) {
    const cardList = document.getElementById('card-list'); // Assuming there's an element with the id "card-list"
    const listItem = document.createElement('li');
    listItem.textContent = `${serialNumber}. ${cardName} - ${price.toFixed(2)} TK`;
    cardList.appendChild(listItem);
}


function updateTotalAmount() {
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = `Total Price: ${totalAmount.toFixed(2)} TK`;
}
const makePurchaseButton = document.getElementById('make-purchase-button');
makePurchaseButton.addEventListener('click', function () {
    // Add your code here to handle the purchase process
});



// Global variables
let serialNumber = 0;
let totalAmount = 0;

// Add event listeners to the cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function () {
        makeBtnClick(this);
    });
});
// go home 
document.addEventListener("DOMContentLoaded", function () {
    const goHomeButton = document.getElementById("goHome");
    const modalForm = document.getElementById("modalForm");

    goHomeButton.addEventListener("click", function () {
        // Close the modal (you should replace this with your actual modal closing logic)
        modalForm.classList.add("hidden"); // Add a class to hide the modal
    });
});
 