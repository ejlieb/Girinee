import requests

obj={"wav_path":"Am20.mp3","answer":'Am'}
# post방식으로 경로,정답코드 전송.
res = requests.post('http://127.0.0.1:8000/chords', data = obj)
p = res.json()
print(p)
