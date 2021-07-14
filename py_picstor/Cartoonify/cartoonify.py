import base64

import cv2
import numpy as np
from rootPath import get_root_path


class Cartoonify:
    def __init__(self, i_Image):
        self.img = cv2.imread('../src/assets/images/' + i_Image)
        self.line_size = None
        self.blur_value = None
        self.total_color = None

    def color_quantization(self):
        # Transform the image
        data = np.float32(self.img).reshape((-1, 3))
        # Determine criteria
        criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 20, 0.001)
        # Implementing K-Means
        ret, label, center = cv2.kmeans(data, self.total_color, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)
        center = np.uint8(center)
        result = center[label.flatten()]
        result = result.reshape(self.img.shape)
        return result

    def edge_mask(self):
        gray = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        gray_blur = cv2.medianBlur(gray, self.blur_value)
        edges = cv2.adaptiveThreshold(gray_blur, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, self.line_size,
                                      self.blur_value)
        return edges

    def sendBase64(self):
        test = cv2.imread('Result.jpg')
        string = "data:image/png;base64,"+base64.b64encode(cv2.imencode('.jpg', test)[1]).decode()
        return string

    def cartoon_Image(self):
        self.line_size = 7
        self.blur_value = 7
        self.total_color = 9
        edges = self.edge_mask()
        img = self.color_quantization()
        blurred = cv2.bilateralFilter(img, d=7, sigmaColor=200, sigmaSpace=200)
        cartoon = cv2.bitwise_and(blurred, blurred, mask=edges)
        cv2.imwrite('Result.jpg', cartoon)
        img = self.sendBase64()
        return img


if __name__ == "__main__":
    test = Cartoonify(get_root_path() + '/Images/Input/test3.jpeg')
    test.cartoon_Image()
