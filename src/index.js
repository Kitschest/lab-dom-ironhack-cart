// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  // console.log('price: ', price)
  const quantity = product.querySelector('.quantity input')
  // console.log('input quantity: ', quantity)

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  
  const subtotal = priceValue * quantityValue;

  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
  
}