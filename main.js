import './style.css'

let counter = 0;

const addBtns = document.querySelectorAll('.add-btn');

const cartCounter = document.querySelector('#cart-counter');
cartCounter.textContent = counter;

addBtns.forEach(element => {
  element.addEventListener('click', () => {
    counter += 1;
    cartCounter.textContent = counter;
    alert('Producto agregado al carrito satisfactoriamente.');
  });
});

const cartBtn = document.querySelector('.cart-btn');
const innerCart = document.querySelector('.inner-cart');
cartBtn.addEventListener('click', () => {
  if (innerCart.classList.contains('d-none')) {
    innerCart.classList.remove('d-none');
  } else {
    innerCart.classList.add('d-none');
  }
});