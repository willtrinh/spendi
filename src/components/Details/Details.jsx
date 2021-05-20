import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions.js";
import useStyles from "./styles";
export const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card
      className={title === "Income" ? classes.income : classes.expense}
      align="center"
    >
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
