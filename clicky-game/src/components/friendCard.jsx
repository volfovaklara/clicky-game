import React from 'react';

const FriendCard = ({ id, name, image, occupation, location, handleClick }) => {
  return (
    <div className="friend-card" onClick={() => handleClick(id)}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{occupation}</p>
      <p>{location}</p>
    </div>
  );
};

export default FriendCard;
