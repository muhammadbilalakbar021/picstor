import cv2
import numpy as np
import base64
from rootPath import get_root_path


class Sketch:
    def __init__(self, i_Image):
        self.img = cv2.imread('../src/assets/images/' + i_Image)
        self.output = '../src/assets/images/'

    def applySketch(self):
        scale_percent = 0.50

        width = int(self.img.shape[1] * scale_percent)
        height = int(self.img.shape[0] * scale_percent)

        dim = (width, height)
        resized = cv2.resize(self.img, dim, interpolation=cv2.INTER_AREA)

        kernel_sharpening = np.array([[-1, -1, -1],
                                      [-1, 9, -1],
                                      [-1, -1, -1]])
        sharpened = cv2.filter2D(resized, -1, kernel_sharpening)

        gray = cv2.cvtColor(sharpened, cv2.COLOR_BGR2GRAY)
        inv = 255 - gray
        gauss = cv2.GaussianBlur(inv, ksize=(15, 15), sigmaX=0, sigmaY=0)
        dodge = cv2.divide(gray, 255 - gauss, scale=256)
        pencil_jc = dodge

        cv2.imwrite(self.output + 'Result.jpg', pencil_jc)
        img = self.sendBase64()
        return img

    def sendBase64(self):
        test = cv2.imread('Result.jpg')
        string = "data:image/png;base64,"+base64.b64encode(cv2.imencode('.jpg', test)[1]).decode()
        return string

# if __name__ == "__main__":
#     test = Sketch(get_root_path() + '/Images/Input/test2.jpeg')
#     test.applySketch()
