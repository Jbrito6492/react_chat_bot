from flask import Flask, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
app = Flask(__name__)

raul_bot = ChatBot("Raul", storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(raul_bot)
trainer.train("chatterbot.corpus.english")

@app.route('/get')
def get_bot_response():
    user_text= request.args.get('msg')
    return str(raul_bot.get_response(user_text))

if __name__ == '__main__':
    app.run()
