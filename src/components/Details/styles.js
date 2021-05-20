import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  income: {
    color: 'green',
    boxShadow: 'rgba(0, 255, 0, 0.4) 0px 5px, rgba(0, 255, 0, 0.3) 0px 10px, rgba(0, 255, 0, 0.2) 0px 15px, rgba(0, 255, 0, 0.1) 0px 20px, rgba(0, 255, 0, 0.05) 0px 25px',
    // transition: 'transform 0.5s',
    // "&:hover": {
    //   transform: 'scale(1.05)'
    // }
  },
  expense: {
    color: 'red',
    boxShadow: 'rgba(255, 0, 0, 0.4) 0px 5px, rgba(255, 0, 0, 0.3) 0px 10px, rgba(255, 0, 0, 0.2) 0px 15px, rgba(255, 0, 0, 0.1) 0px 20px, rgba(255, 0, 0, 0.05) 0px 25px',
    // transition: 'transform 0.5s',
    // "&:hover": {
    //   transform: 'scale(1.05)'
    // }
  },
}));

