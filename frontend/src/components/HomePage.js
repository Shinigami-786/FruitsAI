import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Fruit.AI</h1>
        <p>"Be Healthy!"</p>
      </header>

      <div className="grid-container">
        <div className="grid-item chat">
          <Link to="/chat">Chat</Link>
        </div>
        <div className="grid-item translate">
          <Link to="/translate">Translate</Link>
        </div>
        <div className="grid-item faqs">
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="grid-item about">
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="dot-indicators">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Home;
