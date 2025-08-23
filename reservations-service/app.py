from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

FORMSPREE_URL = os.environ.get('FORMSPREE_URL', 'https://formspree.io/f/xwpqganp')

@app.route('/reservations', methods=['POST'])
def create_reservation():
    try:
        # Extract reservation data from request
        reservation_data = request.json
        
        # Prepare data for Formspree
        form_data = {
            'name': reservation_data.get('name'),
            'email': reservation_data.get('email'),
            'phone': reservation_data.get('phone'),
            'date': reservation_data.get('date'),
            'time': reservation_data.get('time'),
            'guests': reservation_data.get('guests'),
            'message': reservation_data.get('message', '')
        }
        
        # Send to Formspree
        response = requests.post(
            FORMSPREE_URL,
            data=form_data,
            headers={'Accept': 'application/json'}
        )
        
        if response.status_code == 200:
            return jsonify({"message": "Reservation submitted successfully"}), 200
        else:
            return jsonify({"error": "Failed to submit reservation"}), 500
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)