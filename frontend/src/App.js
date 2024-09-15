import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/HomePage'; 
import Chat from './components/Chatbot'; 
import Translate from './components/Translator'; 
import FAQs from './components/FAQ';
import About from './components/About';
import Login from './components/Login';
const handleTranslate = async () => {
  try {
    const response = await axios.post('http://localhost:5000/translate', {
      text: text,
      sourceLang: sourceLang,
      targetLang: targetLang,
    });
    setTranslatedText(response.data.translatedText);
  } catch (error) {
    console.error('Error during translation', error);
    setTranslatedText('Translation failed');
  }
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
