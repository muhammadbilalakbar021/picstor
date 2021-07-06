import cv2
import base64


class HatGlassesFilter:
    def __init__(self, i_Image):
        self.img = cv2.imread('../src/assets/images/' + i_Image)
        self.g_filter = cv2.imread('./Images/Input/Filters/glasses.png')
        self.h_filter = cv2.imread('./Images/Input/Filters/hat.png')
        self.output = '../src/assets/images/'
        self.frame = ""

    def sendBase64(self):
        test = cv2.imread('Result.jpg')
        string = "data:image/png;base64,"+base64.b64encode(cv2.imencode('.jpg', test)[1]).decode()
        return string

    def applyFilter(self):
        face = cv2.CascadeClassifier('./Filter/haarcascade_frontalface_default.xml')
        gray = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        fl = face.detectMultiScale(gray, 1.09, 7)
        ey = face.detectMultiScale(gray, 1.09, 7)

        for (x, y, w, h) in fl:
            frame = self.put_hat(x, y, w, h)
        for (x, y, w, h) in ey:
            frame = self.put_glass(x, y, w, h)

        cv2.imwrite('Result.jpg', frame)
        print(type(frame))
        img = self.sendBase64()
        return img

    def put_hat(self, x, y, w, h):
        face_width = w
        face_height = h
        hat_width = face_width + 1
        hat_height = int(0.50 * face_height) + 1
        hat = cv2.resize(self.h_filter, (hat_width, hat_height))

        for i in range(hat_height):
            for j in range(hat_width):
                for k in range(3):
                    if hat[i][j][k] < 235:
                        self.img[y + i - int(0.40 * face_height)][x + j][k] = hat[i][j][k]
        return self.img

    def put_glass(self, x, y, w, h):
        face_width = w
        face_height = h

        hat_width = face_width + 1
        hat_height = int(0.50 * face_height) + 1

        glass = cv2.resize(self.g_filter, (hat_width, hat_height))

        for i in range(hat_height):
            for j in range(hat_width):
                for k in range(3):
                    if glass[i][j][k] < 235:
                        self.img[y + i - int(-0.20 * face_height)][x + j][k] = glass[i][j][k]
        return self.img

#
# if __name__ == "__main__":
#     test = HatGlassesFilter(get_root_path() + '/Images/Input/people.jpg',
#                             get_root_path() + '/Images/Input/Filters/glasses.png',
#                             get_root_path() + '/Images/Input/Filters/hat.png')
#     test.applyFilter()
