import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import KeyWord from './pages/KeyWord';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search/:keyword" element={<KeyWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
