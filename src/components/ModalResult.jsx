import React from 'react';
import { Dialog, DialogContent, Button } from '@material-ui/core';

const ModalResult = ({
  isOpenResult,
  winner,
  usersConfig,
  setIsOpenResult,
  newGame,
  stepsCounter,
}) => {
  const handleClose = () => {
    setIsOpenResult(false);
    setTimeout(newGame, 100)
  };
  return (
    <Dialog open={isOpenResult} onClose={handleClose}>
      <DialogContent>
        {winner !== null && stepsCounter !== 9 ? (
          <h2>
            Winner is {winner === 'X' ? usersConfig.firstUsername : usersConfig.secondUsername}
          </h2>
        ) : (
          <h2>It`s draw</h2>
        )}
        <Button style={{marginTop: 15}} variant="outlined" color="primary" onClick={handleClose}>New Game</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalResult;
