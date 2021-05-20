import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useStyles from "./styles.js";
import logo from "../../logo.svg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333",
      text: "#fff",
    },
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Spendy.app
          </Typography>
          <img src="../../logo.svg" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}
