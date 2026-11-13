from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/hello/<name>')
def hello(name):
    return jsonify({'message': f'Hello {name}'})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, debug=True)