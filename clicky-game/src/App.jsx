// App.jsx
import React, { useState, useEffect } from 'react';
import FriendCard from './components/friendCard';
import Wrapper from './components/wrapper';
import Title from './components/title';
import friends from './friends.json';

function App() {
  const [friendData, setFriendData] = useState(friends);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState({});

  const reshuffleCards = () => {
    const shuffledFriends = [...friendData].sort(() => Math.random() - 0.5);
    setFriendData(shuffledFriends);
  };

  const handleCorrectClick = (id) => {
    setScore(score + 1);
    setClickedCards({ ...clickedCards, [id]: true });
  };

  const handleIncorrectClick = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setClickedCards({});
    reshuffleCards();
  };

  const handleClick = (id) => {
    if (clickedCards[id]) {
      handleIncorrectClick();
    } else {
      handleCorrectClick(id);
      reshuffleCards();
    }
  };

  useEffect(() => {
    setClickedCards({});
  }, [friendData]);

  return (
    <Wrapper>
      <Title>Current Score: {score} High Score: {highScore}</Title>
      {friendData.map((friend) => (
        <FriendCard
          key={friend.id}
          id={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
          handleClick={handleClick}
        />
      ))}
    </Wrapper>
  );
}

export default App;
