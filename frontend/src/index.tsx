import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import routes
import { MainPage } from './routes/MainPage';
import { MyRecord } from './routes/MyRecord';
import { KakaoLogin } from './routes/KakaoLogin';
import { ChordGame } from './routes/ChordGame';
import { BackingTrack } from './routes/BackingTrack';

// CODEgit 
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/backing" element={<BackingTrack />}></Route>
      <Route path="/game" element={<ChordGame />}></Route>
      <Route path="/login" element={<KakaoLogin />}></Route>
      <Route path="/:userId" element={<MyRecord />}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
