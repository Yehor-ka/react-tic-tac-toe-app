import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';

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
    newGame();
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
      </DialogContent>
    </Dialog>
  );
};

export default ModalResult;
