from flask import Flask, request, jsonify,make_response
from flask_restful import reqparse, abort, Api, Resource
import pickle
import json
import numpy as np
import pandas as pd
from keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
from flask_cors import CORS;

"""load ML model and configuration"""

## API
app = Flask(__name__)
CORS(app)
api = Api(app)


def predict_sentiment(text):
    path_model = 'model_sentiment_v1.h5'
    path_config = 'config.pkl'

    # model = pickle.load(open(path_model, 'rb'))
    # graph = tf.get_default_graph()
    model = load_model(path_model)
    config = pickle.load(open(path_config, 'rb'))
    ret = dict()
    text=text['text']
    #text = [text] if type(text) == np.str else text
    tokenizer = config['tokenizer']['tokenizer']
    text = tokenizer.texts_to_sequences(text)
    text = pad_sequences(text, maxlen=config['tokenizer']['maxlen'])
    sentiment = model.predict(text)
    # argmax_sent = np.argmax(sentiment)
    # if argmax_sent == 2:
    #     ret['sentiment'] = 'Positive'
    # elif argmax_sent == 1:
    #     ret['sentiment'] = "Neutral"
    # elif argmax_sent == 0:
    #     ret['sentiment'] = 'Negative'
    # ret['score'] = str(sentiment[argmax_sent])
    return sentiment


#parser = reqparse.RequestParser()
#parser.add_argument('query')


class PredictSentiment(Resource):
    def get(self):
        print("hello world")
    def put(self):

        #args = parser.parse_args()
        #text = args['query']
        data = request.get_json(force=True)
        # convert data into dataframe
        #data.update((x, [y]) for x, y in data.items())

        data_df = pd.DataFrame(data)
        ret = predict_sentiment(data_df)
        a=ret.tolist()
        #print(ret)
        return a

api.add_resource(PredictSentiment, '/')

if __name__ == '__main__':

    app.run(debug=False,threaded=False)
