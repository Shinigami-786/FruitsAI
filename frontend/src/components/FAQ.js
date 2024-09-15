import React, { useState } from 'react';
import './FAQ.css';

const fruitsData = [
    {
      id: 1,
      name: 'Tangerine',
      image: '/images/tangerine.jpg', 
      description: 'Tangerines are rich in vitamin C and boost immunity.',
    },
    {
      id: 2,
      name: 'Apple',
      image: '/images/apple.jpg',
      description: 'Apples are a good source of fiber and vitamin C.',
    },
    {
      id: 3,
      name: 'Banana',
      image: '/images/banana.jpg',
      description: 'Bananas are rich in potassium and help in muscle recovery.',
    },
  ];
  

const Chat = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className="chat-container">
      {!selectedFruit ? (
        <div className="fruits-list">
          <h2>Fruits List</h2>
          <div className="fruit-cards">
            {fruitsData.map((fruit) => (
              <div key={fruit.id} className="fruit-card" onClick={() => handleFruitClick(fruit)}>
                <img src={fruit.image} alt={fruit.name} className="fruit-image" />
                <h3>{fruit.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="fruit-details">
          <button className="back-button" onClick={() => setSelectedFruit(null)}>
            Back to List
          </button>
          <img src={selectedFruit.image} alt={selectedFruit.name} className="fruit-details-image" />
          <h2>{selectedFruit.name}</h2>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
