import { setLocalStorage, getLocalStorage } from './utils.mjs';
import { FindProductById } from './ProductData.mjs';

function addProductToCart(product) {
  const currentCart = getLocalStorage('so-cart') || [];
  currentCart.push(product);
  setLocalStorage('so-cart', currentCart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await FindProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
