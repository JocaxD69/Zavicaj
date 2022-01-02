// CALCULATOR //
const products = {
    cocaCola: { name: "COCA-COLA", price: 120 },
    fanta: { name: "FANTA", price: 120 },
    sprite: { name: "SPRITE", price: 120 },
    beloVino: { name: "BELO VINO", price: 550 },
    crnoVino: { name: "CRNO VINO", price: 600 },
    rakija: { name: "RAKIJA", price: 60 },
    kiselaVoda: { name: "KISELA VODA HEBA", price: 150 },
    kafa: { name: "KAFA", price: 70 },
    pljeskavica: { name: "PLJESKAVICA", price: 400 },
    cevapi: { name: "ćEVAPI", price: 400 },
    pileceBelo: { name: "PILEćE BELO", price: 500 },
    pileciBatak: { name: "PILEćI BATAK", price: 400 },
    belaVesalica: { name: "BELA VEšALICA", price: 600 },
    raznjici: { name: "RAžNJIćI", price: 500 },
    gurmanskaPljeskavica: { name: "GURMANSKA PLJESKAVICA", price: 600 },
    gurmanskoPileceBelo: { name: "GURMANSKO PILEćE BELO", price: 600 },
  },
  selectedItems = [];
var button = document.getElementById("button");
var select = document.getElementById("select");

/**
 * Gets product information for the provided ID. Passing an ID that doesn't
 * have a matching product will return undefined
 */
function getSelectedProduct(productId) {
  return products[productId];
}

/**
 * Handles the event which is dispatched when the user adds an item to
 * the basket
 */
function onAddItemToBasket(event) {
  // Get the option for the selected item
  const selectedOption = select.options[select.selectedIndex],
    product = getSelectedProduct(selectedOption.id);
  // When there is no product with the ID, exit the method
  if (product === undefined) {
    return;
  }
  // Add the selected item to the basket array with selected items
  selectedItems.push(product);

  // Refresh the basket
  refreshBasket();
}

/**
 * Handles the event which is dispatched when the user removes an item from
 * the basket.
 */
function onRemoveItemFromBasket(event) {
  // When there are no items there is nothing to do
  if (selectedItems.lenght === 0) {
    return;
  }
  // Remove the item at index 0 from the array
  selectedItems.shift();
  refreshBasket();
}

function refreshBasket() {
  const basket = document.getElementById("basket"),
    totalCost = document.getElementById("total-cost");

  // Create a string with item wrapped in a li element
  (itemHTML = selectedItems.reduce(
    (html, item) => html + `<li>${item.name} (${item.price})</li>`,
    ""
  )),
    // Iterate over all the items and calculate the sum of all the items
    (totalPrice = selectedItems.reduce((total, item) => total + item.price, 0));

  // Update the inner HTML of the basket element with the items currently selected
  basket.innerHTML = itemHTML;
  // Update the price of all the items combined
  totalCost.innerHTML = `${totalPrice} din`;
}
const addTrigger = document.getElementById("button"),
  removeTrigger = document.getElementById("remove-button");
addTrigger.addEventListener("click", onAddItemToBasket);
removeTrigger.addEventListener("click", onRemoveItemFromBasket);
// GALLERY //
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  console.log(captionText);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}