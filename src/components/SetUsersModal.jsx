import React from 'react';
import { Dialog, DialogContent, TextField, Button } from '@material-ui/core';

const SetUsersModal = ({ isOpenBeginSetting, setUsersConfig, setIsOpenBeginSettings }) => {
  const [UsersName, setUsersName] = React.useState({
    firstUsername: '',
    secondUsername: ''
  });

  React.useEffect(() => {
    if(UsersName.firstUsername.trim() === '') {
      setUsersName((prevState) => ({
        ...prevState,
        firstUsername: 'Player1',
      }));
    }
    if(UsersName.secondUsername.trim() === '') {
      setUsersName((prevState) => ({
        ...prevState,
        secondUsername: 'Player2',
      }));
    }
  }, [UsersName])

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsersName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPlayers = () => {
    setUsersConfig((prevState) => ({
      ...prevState,
      ...UsersName,
    }));
    setIsOpenBeginSettings(false);
  };

  return (
    <Dialog open={isOpenBeginSetting}>
      <DialogContent>
        <TextField
          name="firstUsername"
          label="First Username"
          type="text"
          fullWidth
          onChange={onChangeInput}
        />
        <TextField
          name="secondUsername"
          label="Second Username"
          type="text"
          fullWidth
          onChange={onChangeInput}
        />
        <Button
          style={{ marginTop: 15 }}
          variant="contained"
          color="secondary"
          onClick={handleAddPlayers}>
          Add players
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SetUsersModal;
