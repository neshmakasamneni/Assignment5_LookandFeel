var itemsAdded = {};

function addToCart(itemName, price) {
    if (itemsAdded[itemName]) {
        itemsAdded[itemName].quantity++;
    } else {
        itemsAdded[itemName] = { quantity: 1, price: price };
    }

    updateItemsAdded();
}

function removeFromCart(itemName) {
    if (itemsAdded[itemName] && itemsAdded[itemName].quantity > 0) {
        itemsAdded[itemName].quantity--;
        if (itemsAdded[itemName].quantity === 0) {
            delete itemsAdded[itemName];
        }
    }

    updateItemsAdded();
}

function updateItemsAdded() {
    var itemList = document.getElementById('addedItems');
    itemList.innerHTML = '';
    var totalPrice = 0;

    for (var item in itemsAdded) {
        var listItem = document.createElement('li');
        var totalItemPrice = itemsAdded[item].quantity * itemsAdded[item].price;
        listItem.textContent = item + ': ' + itemsAdded[item].quantity + ' x $' + itemsAdded[item].price + ' = $' + totalItemPrice;
        itemList.appendChild(listItem);
        totalPrice += totalItemPrice;
    }

    // Display total price
    var totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = 'Estimated Price for the Selected Items: $' + totalPrice.toFixed(2);
}

function buyItems() {
    itemsAdded = {};
    updateItemsAdded();
}


