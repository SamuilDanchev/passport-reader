import sys
import os
import cv2
import numpy as np
from passporteye import read_mrz

# Read the image from file
image = cv2.imread('C:/Projects/passport-reader/WeidlerAusweis1.jpg')

# Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

try:
    # Read the MRZ (Machine Readable Zone) from the image
    mrz = read_mrz(gray)

    # Print the MRZ information
    print('Name: ', mrz.name)
    print('Nationality: ', mrz.nationality)
    print('Birth date: ', mrz.birth_date)

except Exception as e:
    # An error occurred
    print('Error: ', e)
