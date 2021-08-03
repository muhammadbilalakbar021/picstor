from __future__ import division, print_function

import base64
import sys, os, glob, re, argparse
import numpy as np
from PortraitModeEffect.utils import *
from PIL import Image


def create_arg_parser():
    # Creates and returns the ArgumentParser object."""

    parser = argparse.ArgumentParser(description='Portrait Mode Effect.')
    parser.add_argument('-i', '--image', help='Path to the input file.')
    return parser


def PotraitModeEff(image):
    img, output_file_name = execute_portrait_mode('../src/assets/images/'+image)
    img.save(output_file_name, quality=100)
    return sendBase64()


def sendBase64():
    test = cv2.imread('Result.jpg')
    string = "data:image/png;base64,"+base64.b64encode(cv2.imencode('.jpg', test)[1]).decode()
    return string

