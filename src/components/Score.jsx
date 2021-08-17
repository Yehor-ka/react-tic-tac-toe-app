import React from 'react';

const Score = ({ usersConfig }) => {
  const { firstUsername, firstUserCount, secondUsername, secondUserCount } = usersConfig;
  return (
    <div className="score">
      <h1 className="score__text">Score</h1>
      <div>
        <h3 className="score__text">
          {firstUsername}: {firstUserCount}
        </h3>
        <h3 className="score__text">
          {secondUsername}: {secondUserCount}
        </h3>
      </div>
    </div>
  );
};

export default Score;
