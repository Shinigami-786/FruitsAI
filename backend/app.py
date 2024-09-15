from flask import Flask, request, jsonify
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

faqs = [
    {'id': 1, 'question': 'What is an apple?', 'answer': 'An apple is a sweet fruit.'},
    {'id': 2, 'question': 'What is a banana?', 'answer': 'A banana is a tropical fruit.'}
]

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@app.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = next((item for item in faqs if item['id'] == id), None)
    return jsonify(faq) if faq else ('', 404)

@app.route('/faqs', methods=['POST'])
def create_faq():
    new_faq = request.json
    new_faq['id'] = len(faqs) + 1
    faqs.append(new_faq)
    return jsonify(new_faq), 201

@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    faq = next((item for item in faqs if item['id'] == id), None)
    if faq:
        faq.update(request.json)
        return jsonify(faq)
    return ('', 404)

@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    global faqs
    faqs = [item for item in faqs if item['id'] != id]
    return ('', 204)

if __name__ == "__main__":
    app.run(debug=True)



app = Flask(__name__)
CORS(app) 

faqs = [{"id": 1, "question": "What is a fruit?", "answer": "A fruit is..."}]  

@app.route('/faqs', methods=['POST'])
def add_faq():
    try:
        new_faq = request.get_json()
        faqs.append(new_faq) 
        return jsonify(new_faq), 201  
    except Exception as e:
        print(f"Error adding FAQ: {e}")
        return jsonify({"error": "Failed to add FAQ"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)