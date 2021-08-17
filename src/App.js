import React from 'react';
import Game from './components/Game';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Container maxWidth="md">
      <div className="container">
        <Game />
      </div>
    </Container>
  );
};

export default App;
