// js/config.js
const CONFIG = {
    // Store Information
    storeName: "Brandorivk",
    currency: "USD",
    
    // Payment Settings (Get these from Stripe/PayPal)
    payment: {
        stripePublishableKey: "pk_test_YOUR_STRIPE_KEY_HERE", // Replace with your key
        paypalClientId: "YOUR_PAYPAL_CLIENT_ID" // Replace with your ID
    },
    
    // Products Database
    products: [
        {
            id: 1,
            name: "Classic White Tee",
            category: "tshirt",
            price: 25.00,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
            description: "100% premium cotton, breathable fit",
            stock: 15,
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 2,
            name: "Black Graphic Tee",
            category: "tshirt",
            price: 30.00,
            image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
            description: "Premium print, fade-resistant design",
            stock: 8,
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 3,
            name: "Oxford Blue Shirt",
            category: "shirt",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
            description: "Wrinkle-free, office ready formal shirt",
            stock: 12,
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 4,
            name: "Flannel Check Shirt",
            category: "shirt",
            price: 50.00,
            image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500",
            description: "Warm brushed cotton, perfect for winter",
            stock: 6,
            sizes: ["M", "L", "XL"]
        },
        {
            id: 5,
            name: "Slim Fit Chinos",
            category: "pants",
            price: 55.00,
            image: "https://images.unsplash.com/photo-1473966968600-fa96b7c38d7c?w=500",
            description: "Stretch fabric, all-day comfort",
            stock: 20,
            sizes: ["28", "30", "32", "34", "36"]
        },
        {
            id: 6,
            name: "Denim Jeans",
            category: "pants",
            price: 60.00,
            image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500",
            description: "Classic cut, durable premium denim",
            stock: 10,
            sizes: ["28", "30", "32", "34", "36", "38"]
        },
        {
            id: 7,
            name: "Vintage Band Tee",
            category: "tshirt",
            price: 35.00,
            image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500",
            description: "Retro design, soft wash finish",
            stock: 5,
            sizes: ["S", "M", "L"]
        },
        {
            id: 8,
            name: "Linen Summer Shirt",
            category: "shirt",
            price: 40.00,
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c43481b?w=500",
            description: "Lightweight, perfect for warm days",
            stock: 9,
            sizes: ["S", "M", "L", "XL"]
        }
    ]
};

// Helper function to get products
function getProducts() {
    return CONFIG.products;
}

function getProductById(id) {
    return CONFIG.products.find(p => p.id === id);
}

// Update product stock
function updateProductStock(productId, newStock) {
    const product = getProductById(productId);
    if (product) {
        product.stock = newStock;
        saveConfig();
        return true;
    }
    return false;
}

// Update product price
function updateProductPrice(productId, newPrice) {
    const product = getProductById(productId);
    if (product) {
        product.price = parseFloat(newPrice);
        saveConfig();
        return true;
    }
    return false;
}

// Save to localStorage (for admin panel)
function saveConfig() {
    localStorage.setItem('brandorivk_config', JSON.stringify(CONFIG));
}

// Load from localStorage if available
function loadConfig() {
    const saved = localStorage.getItem('brandorivk_config');
    if (saved) {
        const savedConfig = JSON.parse(saved);
        Object.assign(CONFIG, savedConfig);
    }
}

// Initialize
loadConfig();