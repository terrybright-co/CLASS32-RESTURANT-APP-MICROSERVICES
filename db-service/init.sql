CREATE TABLE IF NOT EXISTS menu_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    guests INTEGER NOT NULL,
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    delivery_address TEXT NOT NULL,
    order_details JSONB NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample menu items
INSERT INTO menu_items (name, description, price, category) VALUES
('Bruschetta', 'Toasted bread topped with tomatoes, garlic, and fresh basil', 8.99, 'appetizers'),
('Calamari', 'Crispy fried squid served with marinara sauce', 12.99, 'appetizers'),
('Stuffed Mushrooms', 'Mushroom caps filled with herbed cream cheese', 10.99, 'appetizers'),
('Filet Mignon', '8oz premium beef tenderloin with roasted vegetables', 32.99, 'mains'),
('Grilled Salmon', 'Atlantic salmon with lemon butter sauce and seasonal vegetables', 26.99, 'mains'),
('Vegetable Risotto', 'Creamy Arborio rice with seasonal vegetables and parmesan', 18.99, 'mains'),
('Tiramisu', 'Classic Italian dessert with mascarpone and coffee', 8.99, 'desserts'),
('Chocolate Lava Cake', 'Warm chocolate cake with a molten center, served with vanilla ice cream', 9.99, 'desserts'),
('Cheesecake', 'New York style cheesecake with berry compote', 8.99, 'desserts'),
('House Wine', 'Glass of our premium house red or white wine', 9.99, 'drinks'),
('Craft Cocktail', 'Seasonal specialty cocktail crafted by our mixologist', 12.99, 'drinks'),
('Fresh Lemonade', 'Homemade lemonade with a hint of mint', 5.99, 'drinks');