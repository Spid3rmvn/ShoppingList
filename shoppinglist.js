// Get elements from the DOM
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const itemInput = document.getElementById('itemInput');
const priceInput = document.getElementById('priceInput');
const shoppingList = document.getElementById('shoppingList');

// When the "Add Item" button is clicked
addButton.addEventListener('click', () => {
  // Get input values and trim extra spaces
  const itemName = itemInput.value.trim();
  const itemPrice = priceInput.value.trim();

  // Check if both fields have values
  if (itemName === '' || itemPrice === '') {
    alert('Please enter both an item name and price.');
    return;
  }

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${itemName} - Ksh ${itemPrice}</span>
    <button class="markButton">Mark Purchased</button>
    <button class="deleteButton">Delete</button>
  `;

  // Get the "Mark Purchased" and "Delete" buttons for this item
  const markButton = listItem.querySelector('.markButton');
  const deleteButton = listItem.querySelector('.deleteButton');

  // When the "Mark Purchased" button is clicked
  markButton.addEventListener('click', () => {
    // Toggle the 'purchased' class, which changes the item style
    listItem.classList.toggle('purchased');
  });

  // When the "Delete" button is clicked
  deleteButton.addEventListener('click', () => {
    shoppingList.removeChild(listItem);
  });

  // Add the new item to the shopping list
  shoppingList.appendChild(listItem);

  // Clear the input fields after adding the item
  itemInput.value = '';
  priceInput.value = '';
});

// When the "Clear List" button is clicked
clearButton.addEventListener('click', () => {
  shoppingList.innerHTML = ''; 
});
