from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
from Cartoonify.cartoonify import Cartoonify
# from FaceEditing.test import ffe
from Filter.dog_filter import DogFilter
from Filter.hatglass import HatGlassesFilter
from ImageEnhacement.imgE import EahanceImage
from PortraitModeEffect.portraitmode import PotraitModeEff
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def HelloWorld():
    return {'Name': 'Hello World'}


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


@app.route('/api/hatGlassesFilter', methods=['GET', 'POST'])
@cross_origin()
def HatGlassesF():
    content = request.json
    # try:
    pic = content['pic']
    obj = HatGlassesFilter(pic)
    return obj.applyFilter()
    # except Exception as e:
    #     return e


@app.route('/api/sketch', methods=['GET', 'POST'])
@cross_origin()
def Sketch():
  content = request.json
  try:
    pic = content['pic']
    obj = Sketch(pic)
    return obj.applySketch()
  except Exception as e:
    return e


@app.route('/api/thermal', methods=['GET', 'POST'])
@cross_origin()
def Thermal():
  content = request.json
  try:
    pic = content['pic']
    obj = Thermal(pic)
    return obj.applyThermal()
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


@app.route('/api/ImageEnhancement', methods=['GET', 'POST'])
@cross_origin()
def ImageEnhancement():
    content = request.json
    try:
        pic = content['pic']
        obj = EahanceImage(pic)
        return obj
    except Exception as e:
        return e


@app.route('/api/PortraitModeEffect', methods=['GET', 'POST'])
@cross_origin()
def PortraitModeEffect():
    content = request.json
    try:
        pic = content['pic']
        obj = PotraitModeEff(pic)
        return obj
    except Exception as e:
        return e


@app.route('/api/FacialFeatureEditing', methods=['GET', 'POST'])
@cross_origin()
def FacialFeatureEditing():
    content = request.json
    try:
        pic = content['pic']
        # obj = ffe(pic)
        return "obj"
    except Exception as e:
        return e


if __name__ == '__main__':
    app.run(debug=True)
