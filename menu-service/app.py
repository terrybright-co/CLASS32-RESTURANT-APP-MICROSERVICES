from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

menu_items = {
    "appetizers": [
        {"id": 1, "name": "Bruschetta", "description": "Toasted bread topped with tomatoes, garlic, and fresh basil", "price": 8.99},
        {"id": 2, "name": "Calamari", "description": "Crispy fried squid served with marinara sauce", "price": 12.99},
        {"id": 3, "name": "Stuffed Mushrooms", "description": "Mushroom caps filled with herbed cream cheese", "price": 10.99}
    ],
    "mains": [
        {"id": 4, "name": "Filet Mignon", "description": "8oz premium beef tenderloin with roasted vegetables", "price": 32.99},
        {"id": 5, "name": "Grilled Salmon", "description": "Atlantic salmon with lemon butter sauce and seasonal vegetables", "price": 26.99},
        {"id": 6, "name": "Vegetable Risotto", "description": "Creamy Arborio rice with seasonal vegetables and parmesan", "price": 18.99}
    ],
    "desserts": [
        {"id": 7, "name": "Tiramisu", "description": "Classic Italian dessert with mascarpone and coffee", "price": 8.99},
        {"id": 8, "name": "Chocolate Lava Cake", "description": "Warm chocolate cake with a molten center, served with vanilla ice cream", "price": 9.99},
        {"id": 9, "name": "Cheesecake", "description": "New York style cheesecake with berry compote", "price": 8.99}
    ],
    "drinks": [
        {"id": 10, "name": "House Wine", "description": "Glass of our premium house red or white wine", "price": 9.99},
        {"id": 11, "name": "Craft Cocktail", "description": "Seasonal specialty cocktail crafted by our mixologist", "price": 12.99},
        {"id": 12, "name": "Fresh Lemonade", "description": "Homemade lemonade with a hint of mint", "price": 5.99}
    ]
}

@app.route('/menu', methods=['GET'])
def get_menu():
    return jsonify(menu_items)

@app.route('/menu/<category>', methods=['GET'])
def get_menu_category(category):
    if category in menu_items:
        return jsonify(menu_items[category])
    else:
        return jsonify({"error": "Category not found"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)