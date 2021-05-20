import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { AppContext } from "../../context/context";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import InfoCard from "../InfoCard";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(AppContext);
  return (
    <Card className={classes.cardShadow}>
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance <strong>${balance}</strong>
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
