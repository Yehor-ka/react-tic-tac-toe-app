import React from 'react';
import Board from './Board';
import Score from './Score';
import { calculateWinner } from '../calcWinner';
import ModalResult from './ModalResult';
import SetUsersModal from './SetUsersModal';
import { getLineThrough } from '../getLineThrough';

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
  const [stepsCounter, setStepsCounter] = React.useState(0);
  const [lineThroughStyle, setLineThroughStyle] = React.useState({});

  const { winner, arr } = React.useMemo(() => calculateWinner(board), [board]);

  React.useEffect(() => {
    setIsOpenBeginSettings(true);
  }, []);

  React.useEffect(() => {
    setLineThroughStyle(getLineThrough(arr));
  }, [arr]);

  React.useEffect(() => {
    if (winner !== null) {
      setIsOpenResult(true);
      setIsXNest(true);
      setStepsCounter(0);
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
    } else if (winner === null && stepsCounter === 9) {
      setIsOpenResult(true);
      setStepsCounter(0);
    }
  }, [board]);

  const handleStep = (index) => {
    const newBoard = [...board];
    if (winner || newBoard[index]) return;
    setStepsCounter((prevState) => prevState + 1);

    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNest(!isXNext);
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <>
      <div className="wrapper">
        <Board lineThroughStyle={lineThroughStyle} board={board} handleStep={handleStep} />
        <Score usersConfig={usersConfig} />
      </div>
      <ModalResult
        newGame={newGame}
        usersConfig={usersConfig}
        isOpenResult={isOpenResult}
        setIsOpenResult={setIsOpenResult}
        winner={winner}
        stepsCounter={stepsCounter}
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
