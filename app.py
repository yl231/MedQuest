from flask import Flask, request, jsonify, render_template
import openai

app = Flask(__name__)
openai.api_key = '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'

@app.route('/')
def index():
    return render_template('main_webpage.html')


@app.route('/get_answer', methods=['POST'])
def get_answer():
    question = request.json.get('question')
    response = openai.Completion.create(engine="text-davinci-003", prompt=question, max_tokens=150)
    answer = response.choices[0].text.strip()
    return jsonify(answer=answer)

if __name__ == '__main__':
    app.run(debug=True)
