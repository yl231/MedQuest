from flask import Flask, request, jsonify, render_template
import openai

str1 = 'sk-nRX'
str2 = 'AlRjPtHisv'
str3 = 'Qfv7sVbT3Bl'
str4 = 'bkFJVZnO'
str5 = 'fVPXSt2R0'
str6 = 'w30BFSP'
app = Flask(__name__)
openai.api_key = str1 + str2 + str3 + str4 + str5 + str6

@app.route('/')
def index():
    return render_template('main_webpage.html')


@app.route('/get_answer', methods=['POST'])
def get_answer():
    question = request.json.get('question')
    prompt = "please address my issues in a more straightforward diction" + question
    response = openai.Completion.create(engine="gpt-3.5-turbo-instruct", prompt=prompt, max_tokens=500)
    answer = response.choices[0].text.strip()
    return jsonify(answer=answer)

if __name__ == '__main__':
    app.run(debug=True)
