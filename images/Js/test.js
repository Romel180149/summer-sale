
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
  
  
  
  // Add the clicked card to the list
  function addCardToList(serialNumber, cardName, price) {
    const cardList = document.getElementById('card-list'); // Assuming there's an element with the id "card-list"
    const listItem = document.createElement('li');
    listItem.textContent = `${serialNumber}. ${cardName} - ${price.toFixed(2)} TK`;
    cardList.appendChild(listItem);
  }
  
  // Update the total amount in the DOM
  function updateTotalAmount() {
    const totalAmountElement = document.getElementById('total-amount'); // Assuming there's an element with the id "total-amount"
    totalAmountElement.textContent = totalAmount.toFixed(2); // Display total with two decimal places
  }
  
  // Global variables
  let serialNumber = 0;
  let totalAmount = 0;
  
  // Add event listeners to the cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      makeBtnClick(this);
    });
  });
  
