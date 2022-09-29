from fastapi import FastAPI, File, Form
import models
import os
app = FastAPI()
model_list = list(models.init())

@app.post("/chords/easy",status_code=200)
async def check_easy(wav_path: str = Form(), answer: str = Form()):
    img_paths = models.wav_to_img(wav_path)
    print(img_paths)
    prediction = models.predict_easy(model_list, img_paths)
    for img_path in img_paths:
        os.remove(img_path)
    if prediction == answer:
        return {"is_correct" : "true"}
    return {"is_correct" : "false"}

@app.post("/chords/hard",status_code=200)
async def check_hard(wav_path: str = Form(), answer: str = Form()):
    img_paths = models.wav_to_img(wav_path)
    prediction, score = models.predict_hard(model_list, img_paths)
    for img_path in img_paths:
        os.remove(img_path)
    if prediction == answer:
        return {"is_correct" : "true", "score": score}
    return {"is_correct" : "false", "score": score}