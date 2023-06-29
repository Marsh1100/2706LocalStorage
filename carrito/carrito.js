// Obtener los elementos del carrito del Local Storage al cargar la página
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];



function mostrarCarrito() {
  var cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';

  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = document.createElement('li');
    cartItem.textContent = cartItems[i];
    cartItemsList.appendChild(cartItem);
  }
}

function agregarAlCarrito() {
  var item = document.getElementById('compraInput').value;
  if (item){
    cartItems.push(item);
    mostrarCarrito();
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

}

function vaciarCarrito() {
  cartItems = [];
  mostrarCarrito();
  localStorage.removeItem('cartItems');
}

mostrarCarrito();