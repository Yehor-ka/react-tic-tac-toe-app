import React from 'react';
import Board from './Board';
import Score from './Score';
import { calculateWinner } from '../calcWinner';
import ModalResult from './ModalResult';
import SetUsersModal from './SetUsersModal';

const Game = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [isXNext, setIsXNest] = React.useState(true);
  const [isOpenResult, setIsOpenResult] = React.useState(false);
  const [usersConfig, setUsersConfig] = React.useState({
    firstUsername: '',
    firstUserCount: 0,
    secondUsername: '',
    secondUserCount: 0,
  });
  const [isOpenBeginSetting, setIsOpenBeginSettings] = React.useState(false);

  const winner = calculateWinner(board);

  React.useEffect(() => {
    setIsOpenBeginSettings(true);
  }, []);

  React.useEffect(() => {
    if (winner) {
      setIsOpenResult(true);
      setIsXNest(true);
      if (winner === 'X') {
        setUsersConfig((prevState) => ({
          ...prevState,
          firstUserCount: prevState.firstUserCount + 1,
        }));
      } else {
        setUsersConfig((prevState) => ({
          ...prevState,
          secondUserCount: prevState.secondUserCount + 1,
        }));
      }
    }
  }, [board]);

  const handleStep = (index) => {
    const newBoard = [...board];
    if (winner || newBoard[index]) return;

    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNest(!isXNext);
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
  };

  const isDraw = () => {
    let boardIsFull = false;
    for (let i = 0; i < board.length; i++) {
      if (board[i]) {
        boardIsFull = false;
        break;
      } else {
        boardIsFull = true;
      }
    }
    if (!winner && boardIsFull) alert('Ничья');
  };

  return (
    <>
      <div className="wrapper">
        <Board board={board} handleStep={handleStep} />
        <Score usersConfig={usersConfig} />
      </div>
      <ModalResult
        newGame={newGame}
        usersConfig={usersConfig}
        isOpenResult={isOpenResult}
        setIsOpenResult={setIsOpenResult}
        winner={winner}
      />
      <SetUsersModal
        isOpenBeginSetting={isOpenBeginSetting}
        setIsOpenBeginSettings={setIsOpenBeginSettings}
        setUsersConfig={setUsersConfig}
      />
    </>
  );
};

export default Game;
