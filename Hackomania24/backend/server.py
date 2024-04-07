from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///credit_card_fraud.db'
db = SQLAlchemy(app)

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Float)
    time = db.Column(db.DateTime)
    is_fraud = db.Column(db.Boolean)

db.create_all()

@app.route('/transactions', methods=['POST'])
def add_transaction():
    data = request.get_json()
    transaction = Transaction(
        amount=data['amount'],
        time=data['time'],
        is_fraud=data['is_fraud']
    )
    db.session.add(transaction)
    db.session.commit()
    return jsonify({'message': 'Transaction added successfully'})

@app.route('/transactions', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.all()
    result = []
    for transaction in transactions:
        result.append({
            'id': transaction.id,
            'amount': transaction.amount,
            'time': transaction.time,
            'is_fraud': transaction.is_fraud
        })
    return jsonify(result)