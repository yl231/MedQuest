import os
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from cryptography.fernet import Fernet
import base64

# Salting and Hashing Encryption
def derive_key(password: str, salt: bytes):
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
        backend=default_backend()
    )
    return base64.urlsafe_b64encode(kdf.derive(password.encode()))

# Double Encryption
def encrypt_data(key, plaintext):
    # AES Encryption
    cipher = Cipher(algorithms.AES(key), modes.OFB(b'16 byte string'), backend=default_backend())
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(plaintext.encode()) + encryptor.finalize()

    # Fernet Encryption
    fernet_key = Fernet.generate_key()
    cipher_suite = Fernet(fernet_key)
    encrypted_text = cipher_suite.encrypt(ciphertext)

    return fernet_key, encrypted_text

def decrypt_data(key, fernet_key, encrypted_text):
    cipher_suite = Fernet(fernet_key)
    decrypted_aes_text = cipher_suite.decrypt(encrypted_text)

    # AES Decryption
    cipher = Cipher(algorithms.AES(key), modes.OFB(b'16 byte string'), backend=default_backend())
    decryptor = cipher.decryptor()
    return decryptor.update(decrypted_aes_text) + decryptor.finalize()

SALT = os.urandom(16)
PASSWORD = os.environ.get("PASSWORD")

derived_key = derive_key(PASSWORD, SALT)

API_KEY = "YOUR_API_KEY"
fernet_key, encrypted_data = encrypt_data(derived_key, API_KEY)

decrypted_data = decrypt_data(derived_key, fernet_key, encrypted_data).decode()
