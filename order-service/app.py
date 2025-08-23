from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

FORMSPREE_URL = os.environ.get('FORMSPREE_URL', 'https://formspree.io/f/xwpqganp')

@app.route('/orders', methods=['POST'])
def create_order():
    try:
        # Extract order data from request
        order_data = request.json
        
        # Prepare data for Formspree
        form_data = {
            'name': order_data.get('name'),
            'email': order_data.get('email'),
            'phone': order_data.get('phone'),
            'address': order_data.get('address'),
            'instructions': order_data.get('instructions', ''),
            'order_details': order_data.get('order_details'),
            'order_total': order_data.get('order_total')
        }
        
        # Send to Formspree
        response = requests.post(
            FORMSPREE_URL,
            data=form_data,
            headers={'Accept': 'application/json'}
        )
        
        if response.status_code == 200:
            return jsonify({"message": "Order submitted successfully"}), 200
        else:
            return jsonify({"error": "Failed to submit order"}), 500
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)