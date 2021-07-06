import cv2
import base64
from rootPath import get_root_path


class Thermal:
    def __init__(self, i_Image):
        self.img = cv2.imread('../src/assets/images/' + i_Image)
        self.output = '../src/assets/images/'

    def applyThermal(self):
        heatmap = cv2.applyColorMap(self.img, cv2.COLORMAP_HSV)
        cv2.imwrite(self.output + 'Result.jpg', heatmap)

        img = self.sendBase64()
        return img

    def sendBase64(self):
        test = cv2.imread('Result.jpg')
        string = "data:image/png;base64,"+base64.b64encode(cv2.imencode('.jpg', test)[1]).decode()
        return string

#
# if __name__ == "__main__":
#     test = Thermal(get_root_path() + '/Images/Input/people.jpg')
#     test.applyThermal()
