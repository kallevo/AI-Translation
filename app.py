from flask import Flask, render_template, request, jsonify
from transformers import pipeline

app = Flask(__name__)


# Default route
@app.route("/")
def index():
    return render_template("index.html")


# Route for the text translation
@app.route("/translate", methods=["POST"])
def translate():
    text = request.form["translatableText"]
    translator = pipeline("translation", model="Helsinki-NLP/opus-mt-en-fi")  # Setting up the translation pipeline
    translated_text = translator(text)  # Giving the text to the translation pipeline
    print(translated_text)
    return jsonify({"translatedText": translated_text})  # Sending the translated text in JSON format


if __name__ == "__main__":
    app.run()
