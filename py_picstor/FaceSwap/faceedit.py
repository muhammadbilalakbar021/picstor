import base64
import os
import cv2

from FaceSwap.face_detection import select_face
from FaceSwap.face_swap import face_swap


def faceEdit(i_Image):
  src_img = cv2.imread('../src/assets/images/' + i_Image)
  dst_img = cv2.imread(r'./FaceSwap/imgs/test4.jpg')

  # Select src face
  src_points, src_shape, src_face = select_face(src_img)
  # Select dst face
  dst_points, dst_shape, dst_face = select_face(dst_img)

  # if src_points is None or dst_points is None:
  #   print('Detect 0 Face !!!')
  #   exit(-1)

  output = face_swap(src_face, dst_face, src_points, dst_points, dst_shape, dst_img, "correct_color")
  cv2.imwrite('Result.jpg', output)
  return sendBase64()


def sendBase64():
  test = cv2.imread('Result.jpg')
  string = "data:image/png;base64," + base64.b64encode(cv2.imencode('.jpg', test)[1]).decode()
  return string
