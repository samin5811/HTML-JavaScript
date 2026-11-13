import json

from flask import Flask, Response

app = Flask(__name__)
@app.route('/translate/<word>')
def translate_word(word):
    try:
        with open('dictionary.json', 'r') as file:
            data = json.load(file)
            response = {
                "English": word,
                "Finnish": data[word].lower()
            }
        return response

    except KeyError:
        response = {
            "error": "Word not found",
            "status": 404
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=404, mimetype="application/json")
        return http_response
@app.route('/words')
def all_words():
    with open('dictionary.json', 'r') as file:
        data = json.load(file)
        english_words = list(data.keys())
    return english_words
if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)