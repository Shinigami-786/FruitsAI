import React, { useState } from 'react';
import axios from 'axios';

const Translate = () => {
  const [text, setText] = useState('');
  const [targetLang, setTargetLang] = useState('es');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/translate', {
        text: text,
        targetLang: targetLang,
      });
      setTranslatedText(response.data.translatedText);
      setError('');
    } catch (error) {
      setError('Translation failed');
      setTranslatedText('');
    }
  };

  return (
    <div>
      <h1>Translator</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <br />
      <label>
        Language:
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>
      </label>
      <br />
      <button onClick={handleTranslate}>Translate</button>
      <div>
        <h2>Translation:</h2>
        {error ? <p>{error}</p> : <p>{translatedText}</p>}
      </div>
    </div>
  );
};

export default Translate;
