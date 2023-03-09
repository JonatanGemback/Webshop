function addToCart(name, price) {

    // Get the cart from local storage  

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the item to the cart  

    cart.push({
        name: name,
        price: price
    });

    // Save the updated cart to local storage  

    localStorage.setItem('cart', JSON.stringify(cart));
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = '${item.name} - ${item.price}';
    document.body.appendChild(itemElement);
});