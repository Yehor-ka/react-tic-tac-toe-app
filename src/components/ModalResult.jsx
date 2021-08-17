import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';

const ModalResult = ({ isOpenResult, winner, usersConfig, setIsOpenResult, newGame }) => {
  const handleClose = () => {
    setIsOpenResult(false);
    newGame();
  };
  return (
    <Dialog open={isOpenResult} onClose={handleClose}>
      <DialogContent>
        <h2>Winner is {winner === 'X' ? usersConfig.firstUsername : usersConfig.secondUsername}</h2>
      </DialogContent>
    </Dialog>
  );
};

export default ModalResult;
