import React from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, ErrorPanel } from '@speechly/react-ui';
import Navbar from './components/Navbar/Navbar.jsx';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.button}>
        <PushToTalkButton size="4rem" gradientStops={["#54d14d", "#db4040"]} />
        <ErrorPanel />
      </div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={11} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={11} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={11} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={11} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>

    </>
  )
}

export default App;