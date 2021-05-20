import React from "react";
import {
  incomeCategories,
  expenseCategories,
} from "../../constants/categories.js";
import useStyles from "./styles.js";
const isIncome = Math.round(Math.random());
const amount = Math.round(Math.random() * 1000) + 50;
let randomIndex = 0;
if (isIncome) {
  randomIndex = Math.round(Math.random() * (incomeCategories.length - 1));
} else {
  randomIndex = Math.round(Math.random() * (expenseCategories.length - 1));
}

const InfoCard = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      <p className={classes.intent}>Press the button and hold to talk:</p>
      <span className={classes.intent}>Add</span>{" "}
      {isIncome ? (
        <span className={classes.income}>Income</span>
      ) : (
        <span className={classes.expense}>Expense</span>
      )}{" "}
      for <span className={classes.intent}>${amount}</span> in{" "}
      <span className={classes.intent}>Category</span>{" "}
      {isIncome ? (
        <span className={classes.income}>
          {incomeCategories[randomIndex].type}
        </span>
      ) : (
        <span className={classes.expense}>
          {expenseCategories[randomIndex].type}
        </span>
      )}{" "}
      for{" "}
      <span className={classes.intent}>
        next {isIncome ? "Monday " : "Tuesday "}
      </span>
    </div>
  );
};

export default InfoCard;
