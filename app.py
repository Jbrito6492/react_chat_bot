import os
from flask import Flask, request, send_from_directory
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
app = Flask(__name__, static_folder='public/dist')

raul_bot = ChatBot(
    "Raul", storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(raul_bot)
trainer.train("chatterbot.corpus.english")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/get')
def get_bot_response():
    user_text = request.args.get('message')
    print(user_text)
    return str(raul_bot.get_response(user_text))


if __name__ == '__main__':
    app.run()
