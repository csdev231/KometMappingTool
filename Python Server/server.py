from flask import Flask, request, jsonify
from flask_cors import cross_origin
import requests
from waitress import serve  # Import Waitress

app = Flask(__name__)

@app.route('/api/product/add', methods=['POST', 'OPTIONS'])
@cross_origin()  # Enable CORS on this route
def add_product():
    try:
        print('Add Products Running')
        data = request.json
        response = requests.post('https://api.kometsales.com/api/product.add', json=data, headers={'Accept': 'application/json'})
        print(response.json())  # Simplified for debugging
        return jsonify(response.json())
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "An error occurred during processing."}), 500

# Use Waitress to serve the application
serve(app, host='127.0.0.1', port=5000)
