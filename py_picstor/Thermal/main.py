import cv2
from rootPath import get_root_path


class Thermal:
    def __init__(self, i_Image):
        self.img = cv2.imread(i_Image)
        self.output = get_root_path() + '/Images/Output/'

    def applyThermal(self):
        heatmap = cv2.applyColorMap(self.img, cv2.COLORMAP_HSV)
        cv2.imwrite(self.output + 'Thermal.jpg', heatmap)


if __name__ == "__main__":
    test = Thermal(get_root_path() + '/Images/Input/people.jpg')
    test.applyThermal()
