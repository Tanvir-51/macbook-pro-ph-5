function componentSelection(name, price) {
  document.getElementById(name).innerText = price;
}

//calculate the sum of all the price
function calculateSubtotal() {
  const basePrice = parseInt(document.getElementById("best-price").innerText);
  const memoryPrice = parseInt(
    document.getElementById("extra-memory").innerText
  );
  const storagePrice = parseInt(
    document.getElementById("extra-storage").innerText
  );
  const deliveryPrice = parseInt(
    document.getElementById("delivery-id").innerText
  );
  const subtotal = basePrice + memoryPrice + storagePrice + deliveryPrice;
  document.getElementById("sub-total").innerText = subtotal;
  document.getElementById("total-id").innerText = subtotal;
}

//click event for memory select
document.getElementById("btn-8gb").addEventListener("click", function () {
  var price = componentSelection("extra-memory", 0);
  calculateSubtotal();
});
document.getElementById("btn-16gb").addEventListener("click", function () {
  var price = componentSelection("extra-memory", 180);
  calculateSubtotal();
});

//click event for storage select
document.getElementById("btn-256gb").addEventListener("click", function () {
  var price = componentSelection("extra-storage", 0);
  calculateSubtotal();
});
document.getElementById("btn-512gb").addEventListener("click", function () {
  var price = componentSelection("extra-storage", 100);
  calculateSubtotal();
});
document.getElementById("btn-1tb").addEventListener("click", function () {
  var price = componentSelection("extra-storage", 180);
  calculateSubtotal();
});

//click event for delivery select
document.getElementById("delv-btn1").addEventListener("click", function () {
  var price = componentSelection("delivery-id", 0);
  calculateSubtotal();
});
document.getElementById("delv-btn2").addEventListener("click", function () {
  var price = componentSelection("delivery-id", 20);
  calculateSubtotal();
});

//promo code and taking 20% discount
document.getElementById("promo-submit").addEventListener("click", function () {
  var promoCode = document.getElementById("promo-input").value;
  if (promoCode == "stevekaku") {
    subtotal = parseInt(document.getElementById("sub-total").innerText);
    total = subtotal - subtotal * 0.2;
    document.getElementById("total-id").innerText = total.toFixed(2);
    //clear the text of promocode input
    document.getElementById("promo-input").value = "";
  }
});
