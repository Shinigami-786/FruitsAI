from flask import Blueprint, jsonify, request

faqs = [
    {"id": 1, "question": "What is Fruit.ai?", "answer": "Fruit.ai is a health manager application."},
    {"id": 2, "question": "How does the chatbot work?", "answer": "The chatbot provides information about fruits."}
]

api = Blueprint('api', __name__)

@api.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@api.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = next((item for item in faqs if item["id"] == id), None)
    return jsonify(faq) if faq else ('Not Found', 404)

@api.route('/faqs', methods=['POST'])
def add_faq():
    new_faq = request.json
    faqs.append(new_faq)
    return jsonify(new_faq), 201

@api.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    updated_faq = request.json
    for i, faq in enumerate(faqs):
        if faq["id"] == id:
            faqs[i] = updated_faq
            return jsonify(updated_faq)
    return ('Not Found', 404)

@api.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    global faqs
    faqs = [faq for faq in faqs if faq["id"] != id]
    return ('', 204)
