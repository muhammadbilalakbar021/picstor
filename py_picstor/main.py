from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin

from Cartoonify.cartoonify import Cartoonify
from Filter.dog_filter import DogFilter
import datetime

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def HelloWorld():
    print("Hello World")
    return {'Name': 'Bilal'}


@app.route('/api/dogFilter', methods=['GET', 'POST'])
@cross_origin()
def Dogfilter():
    content = request.json
    try:
        pic = content['pic']
        obj = DogFilter(pic)
        return obj.applyFilter()
    except Exception as e:
        return e


@app.route('/api/cartoonFilter', methods=['GET', 'POST'])
@cross_origin()
def Cartoonfilter():
    content = request.json
    try:
        pic = content['pic']
        obj = Cartoonify(pic)
        return obj.cartoon_Image()
    except Exception as e:
        return e


if __name__ == '__main__':
  app.run(debug=True)
