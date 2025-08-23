document.addEventListener('DOMContentLoaded', function() {
    // Menu data
    const menuData = {
        appetizers: [
            { id: 1, name: "Bruschetta", description: "Toasted bread topped with tomatoes, garlic, and fresh basil", price: 8.99, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" },
            { id: 2, name: "Calamari", description: "Crispy fried squid served with marinara sauce", price: 12.99, image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
            { id: 3, name: "Stuffed Mushrooms", description: "Mushroom caps filled with herbed cream cheese", price: 10.99, image: "https://images.unsplash.com/photo-1519138817871-0be5d34eab5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" }
        ],
        mains: [
            { id: 4, name: "Filet Mignon", description: "8oz premium beef tenderloin with roasted vegetables", price: 32.99, image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
            { id: 5, name: "Grilled Salmon", description: "Atlantic salmon with lemon butter sauce and seasonal vegetables", price: 26.99, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
            { id: 6, name: "Vegetable Risotto", description: "Creamy Arborio rice with seasonal vegetables and parmesan", price: 18.99, image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" }
        ],
        desserts: [
            { id: 7, name: "Tiramisu", description: "Classic Italian dessert with mascarpone and coffee", price: 8.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
            { id: 8, name: "Chocolate Lava Cake", description: "Warm chocolate cake with a molten center, served with vanilla ice cream", price: 9.99, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
            { id: 9, name: "Cheesecake", description: "New York style cheesecake with berry compote", price: 8.99, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" }
        ],
        drinks: [
            { id: 10, name: "House Wine", description: "Glass of our premium house red or white wine", price: 9.99, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
            { id: 11, name: "Craft Cocktail", description: "Seasonal specialty cocktail crafted by our mixologist", price: 12.99, image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" },
            { id: 12, name: "Fresh Lemonade", description: "Homemade lemonade with a hint of mint", price: 5.99, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" }
        ]
    };

    // Initialize the menu display
    function initMenu() {
        displayMenuItems('appetizers');
        
        // Add event listeners to category buttons
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                displayMenuItems(this.dataset.category);
            });
        });
    }

    // Display menu items based on category
    function displayMenuItems(category) {
        const menuItemsContainer = document.getElementById('menu-items');
        menuItemsContainer.innerHTML = '';
        
        menuData[category].forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="price">$${item.price.toFixed(2)}</div>
                </div>
            `;
            menuItemsContainer.appendChild(menuItemElement);
        });
    }

    // Initialize the order system
    function initOrderSystem() {
        displayOrderMenuItems();
        
        // Add event listener to checkout button
        document.getElementById('checkout-btn').addEventListener('click', function() {
            if (cart.length > 0) {
                document.getElementById('checkout-modal').classList.remove('hidden');
            } else {
                alert('Your cart is empty. Please add items before checking out.');
            }
        });
        
        // Add event listener to close modal
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('checkout-modal').classList.add('hidden');
        });
        
        // Handle order form submission
        document.getElementById('order-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Prepare order details for Formspree
            const orderDetails = cart.map(item => 
                `${item.quantity}x ${item.name} - $${item.price.toFixed(2)} each`
            ).join('\n');
            
            document.getElementById('order-details').value = orderDetails;
            document.getElementById('order-total').value = calculateTotal();
            
            // Submit the form to Formspree
            this.submit();
            
            // Show success message
            document.getElementById('order-message').classList.remove('hidden');
            document.getElementById('checkout-modal').classList.add('hidden');
            
            // Clear the cart
            cart = [];
            updateCartDisplay();
        });
    }

    // Display menu items for ordering
    function displayOrderMenuItems() {
        const orderMenuContainer = document.querySelector('.menu-items-order');
        orderMenuContainer.innerHTML = '';
        
        // Combine all menu items
        const allMenuItems = [
            ...menuData.appetizers,
            ...menuData.mains,
            ...menuData.desserts,
            ...menuData.drinks
        ];
        
        allMenuItems.forEach(item => {
            const orderItemElement = document.createElement('div');
            orderItemElement.classList.add('order-item');
            orderItemElement.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="price">$${item.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
            `;
            orderMenuContainer.appendChild(orderItemElement);
        });
        
        // Add event listeners to add-to-cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.dataset.id);
                addToCart(itemId);
            });
        });
    }

    // Cart functionality
    let cart = [];
    
    function addToCart(itemId) {
        // Find the item in all categories
        let item = null;
        for (const category in menuData) {
            item = menuData[category].find(i => i.id === itemId);
            if (item) break;
        }
        
        if (item) {
            const existingItem = cart.find(i => i.id === itemId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1
                });
            }
            updateCartDisplay();
        }
    }
    
    function updateCartDisplay() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const totalAmountElement = document.getElementById('total-amount');
        
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            document.getElementById('total-amount').textContent = '0.00';
            return;
        }
        
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div>${item.quantity}x ${item.name}</div>
                <div>$${(item.price * item.quantity).toFixed(2)}</div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        totalAmountElement.textContent = calculateTotal().toFixed(2);
    }
    
    function calculateTotal() {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Handle reservation form submission
    document.getElementById('reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Submit the form to Formspree
        this.submit();
        
        // Show success message
        document.getElementById('reservation-message').classList.remove('hidden');
        this.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize the application
    initMenu();
    initOrderSystem();
});