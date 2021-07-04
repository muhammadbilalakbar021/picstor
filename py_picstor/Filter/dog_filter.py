import base64
import cv2


class DogFilter:
    def __init__(self, i_Image):
        self.img = cv2.imread('../src/assets/images/' + i_Image)
        self.filter = cv2.imread('./Images/Input/Filters/dog.png')
        self.output = '../src/assets/images/'
        self.frame = ""

    def sendBase64(self):
        test = cv2.imread('DogResult.jpg')
        string = "data:image/png;base64,"+base64.b64encode(cv2.imencode('.jpg', test)[1]).decode()
        return string

    def applyFilter(self):
        face = cv2.CascadeClassifier('./Filter/haarcascade_frontalface_default.xml')
        gray = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        fl = face.detectMultiScale(gray, 1.09, 7)

        for (x, y, w, h) in fl:
            frame = self.put_dog_filter(x, y, w, h)
        self.frame = frame

        cv2.imwrite('DogResult.jpg', frame)
        print(type(frame))
        img = self.sendBase64()
        return img

    def put_dog_filter(self, x, y, w, h):
        face_width = w
        face_height = h

        dog = cv2.resize(self.filter, (int(face_width * 1.5), int(face_height * 1.95)))
        for i in range(int(face_height * 1.75)):
            for j in range(int(face_width * 1.5)):
                for k in range(3):
                    if dog[i][j][k] < 235:
                      self.img[y + i - int(0.375 * h) - 1][x + j - int(0.35 * w)][k] = dog[i][j][k]
        return self.img


# if __name__ == "__main__":
#     print(os.listdir('../../src/assets/images'))
#     i_Image = 'img.jpg'
#     test = DogFilter(i_Image)
#     test.applyFilter()
