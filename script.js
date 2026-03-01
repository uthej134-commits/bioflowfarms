// Shopping Cart Management

class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addProduct(product) {
        this.cart.push(product);
    }

    removeProduct(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
    }

    getTotal() {
        return this.cart.reduce((total, product) => total + product.price, 0);
    }

    clearCart() {
        this.cart = [];
    }
}

// Product Management

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    searchProducts(query) {
        return this.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    }
}

// Form Validation

function validateForm(formData) {
    let isValid = true;
    for (const field in formData) {
        if (!formData[field]) {
            isValid = false;
            break;
        }
    }
    return isValid;
}

// Local Storage Integration

function saveToLocalStorage(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadFromLocalStorage() {
    const cartData = localStorage.getItem('shoppingCart');
    return cartData ? JSON.parse(cartData) : [];
}

// Checkout Functionality

function checkout(cart) {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Proceed with checkout process here
    console.log('Checkout process initiated.');
}

// Example Usage
const shoppingCart = new ShoppingCart();
const productManager = new ProductManager();

// Sample product
const product = { id: 1, name: 'Sample Product', price: 10 };
productManager.addProduct(product);
shoppingCart.addProduct(product);

// Save cart to local storage
saveToLocalStorage(shoppingCart.cart);

// Perform checkout
checkout(shoppingCart.cart);