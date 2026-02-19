// js/config.js - Version 2.0
const CONFIG = {
    version: "2.0",
    storeName: "Brandorivk",
    currency: "USD",
    
    products: [
        {
            id: 1,
            name: "Classic White Tee",
            category: "tshirt",
            price: 25.00,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
            description: "100% premium cotton, breathable fit",
            stock: 15
        },
        {
            id: 2,
            name: "Black Graphic Tee",
            category: "tshirt",
            price: 30.00,
            image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80",
            description: "Premium print, fade-resistant design",
            stock: 8
        },
        {
            id: 3,
            name: "Oxford Blue Shirt",
            category: "shirt",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
            description: "Wrinkle-free, office ready formal shirt",
            stock: 12
        },
        {
            id: 4,
            name: "Flannel Check Shirt",
            category: "shirt",
            price: 50.00,
            image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500&q=80",
            description: "Warm brushed cotton, perfect for winter",
            stock: 6
        },
        {
            id: 5,
            name: "Slim Fit Chinos",
            category: "pants",
            price: 55.00,
            image: "https://images.unsplash.com/photo-1473966968600-fa96b7c38d7c?w=500&q=80",
            description: "Stretch fabric, all-day comfort",
            stock: 20
        },
        {
            id: 6,
            name: "Denim Jeans",
            category: "pants",
            price: 60.00,
            image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500&q=80",
            description: "Classic cut, durable premium denim",
            stock: 10
        },
        {
            id: 7,
            name: "Vintage Band Tee",
            category: "tshirt",
            price: 35.00,
            image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80",
            description: "Retro design, soft wash finish",
            stock: 5
        },
        {
            id: 8,
            name: "Linen Summer Shirt",
            category: "shirt",
            price: 40.00,
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c43481b?w=500&q=80",
            description: "Lightweight, perfect for warm days",
            stock: 9
        }
    ]
};

// Get products
function getProducts() {
    return CONFIG.products;
}

// Get product by ID
function getProductById(id) {
    return CONFIG.products.find(p => p.id === id);
}

// Save config to localStorage
function saveConfig() {
    localStorage.setItem('brandorivk_config_v2', JSON.stringify(CONFIG));
}

// Load config - auto-clears on version change
function loadConfig() {
    const savedVersion = localStorage.getItem('configVersion');
    const savedConfig = localStorage.getItem('brandorivk_config_v2');
    
    // If version changed, clear old data
    if (savedVersion !== CONFIG.version) {
        localStorage.clear();
        localStorage.setItem('configVersion', CONFIG.version);
        console.log('Config updated to v' + CONFIG.version);
        return;
    }
    
    // Load saved config if exists
    if (savedConfig) {
        try {
            const parsed = JSON.parse(savedConfig);
            Object.assign(CONFIG, parsed);
        } catch(e) {
            console.log('Using default config');
        }
    }
}

// Initialize
loadConfig();