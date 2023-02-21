import io
from passporteye import read_mrz
import pytesseract

pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe' 
with open('C:/Projects/passport-reader/ausweisDE.jpg', 'rb') as file:
    # Convert the image file to bytes
    file_bytes = io.BytesIO(file.read())
    # Use PassportEye to read the MRZ from the image
    mrz = read_mrz(file_bytes)
    # Extract the relevant information from the MRZ
    first_name = mrz.names[0].replace('<', '').strip()
    last_name = mrz.names[1].replace('<', '').strip()
    passport_number = mrz.number.replace('<', '').strip()
    birth_date = mrz.birth_date
    expiration_date = mrz.expiration_date
    # Print the extracted information
    print('First name: ', first_name)
    print('Last name: ', last_name)
    print('Passport number: ', passport_number)
    print('Birth date: ', birth_date)
    print('Expiration date: ', expiration_date)
