export const getLineThrough = (arr) => {
  const winningPos = '[' + String(arr) + ']';
  switch (winningPos) {
    case '[0,1,2]':
      return {
        top: '45px',
        left: '5px',
        height: '10px',
        width: '320px',
      };
    case '[3,4,5]':
      return {
        top: '155px',
        left: '5px',
        height: '10px',
        width: '320px',
      };
    case '[6,7,8]':
      return {
        top: '265px',
        left: '5px',
        height: '10px',
        width: '320px',
      };
    case '[0,4,8]':
      return {
        top: '-24px',
        left: '165px',
        height: '380px',
        width: '10px',
        transform: 'rotate(-45deg)',
      };
    case '[2,4,6]':
      return {
        top: '-24px',
        left: '165px',
        height: '380px',
        width: '10px',
        transform: 'rotate(45deg)',
      };
    case '[0,3,6]':
      return {
        top: '5px',
        left: '45px',
        height: '320px',
        width: '10px',
      };
    case '[1,4,7]':
      return {
        top: '5px',
        left: '160px',
        height: '320px',
        width: '10px',
      };
    case '[2,5,8]':
      return {
        top: '5px',
        left: '270px',
        height: '320px',
        width: '10px',
      };
    default:
      return null;
  }
};

/* [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], */
