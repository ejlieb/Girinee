from pyexpat import model
from keras.models import load_model
from PIL import Image, ImageOps
import numpy as np
import librosa
import librosa.display
import matplotlib.pyplot as plt
import os

chords = ["A","Am","B","Bm","C","Cm","D","Dm","E","Em","F","Fm","G"]
def init():
    return (load_model(os.path.join('check_point','keras_model_cqt_200.h5'), compile = False), \
        load_model(os.path.join('check_point','keras_model_ton_200.h5'), compile = False), load_model(os.path.join('check_point','keras_model_cens_200.h5'), compile = False))

def cqt(sample_sounds, sr, wav_path):
    plt.figure(figsize=(14,14))
    chroma_cqt = librosa.feature.chroma_cqt(y=sample_sounds, sr=sr)
    librosa.display.specshow(chroma_cqt)
    plt.savefig(wav_path, dpi=42,bbox_inches='tight', pad_inches=0)
    plt.clf()

def tonnetz(guitar,sr,wav_path):
    plt.figure(figsize=(14,14))
    tonnetz = librosa.feature.tonnetz(y=guitar, sr=sr)
    librosa.display.specshow(tonnetz)
    plt.savefig(wav_path, dpi=42,bbox_inches='tight', pad_inches=0)
    plt.clf()

def cens(guitar,sr,wav_path):
    plt.figure(figsize=(14,14))
    chroma_cens = librosa.feature.chroma_cens(y=guitar, sr=sr)
    librosa.display.specshow(chroma_cens)
    plt.savefig(wav_path, dpi=42,bbox_inches='tight', pad_inches=0)
    plt.clf()

def wav_to_img(wav_path):
    img_paths=[]
    guitar, sr = librosa.core.load(wav_path)
    wav_path = wav_path.replace(".wav","_cqt.jpg").replace(".mp3","_cqt.jpg")
    cqt(guitar, sr, wav_path)
    img_paths.append(wav_path)

    wav_path = wav_path.replace("_cqt.jpg","_ton.jpg")
    tonnetz(guitar, sr, wav_path)
    img_paths.append(wav_path)

    wav_path = wav_path.replace("_ton.jpg","_cens.jpg")
    cens(guitar, sr, wav_path)
    img_paths.append(wav_path)
    return img_paths


def predict_hard(model_list,img_paths):
    predictions = []
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    for i in range(3):
        image = Image.open(img_paths[i])
        size = (224, 224)
        image = ImageOps.fit(image, size, Image.ANTIALIAS)
        image_array = np.asarray(image)
        normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
        data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
        data[0] = normalized_image_array
        predictions.append(model_list[i].predict(data))
    prediction = predictions[0]+predictions[1]+ 0.5*predictions[2]
    scroe = f'{np.argmax(prediction[0])*40:d}'
    return chords[np.argmax(prediction[0])], scroe



