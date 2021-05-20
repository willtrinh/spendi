import React from "react";
import {
  incomeCategories,
  expenseCategories,
} from "../constants/categories.js";
const isIncome = Math.round(Math.random());
const amount = Math.round(Math.random() * 1000) + 50;
let randomIndex = 0;
if (isIncome) {
  randomIndex = Math.round(Math.random() * (incomeCategories.length - 1));
} else {
  randomIndex = Math.round(Math.random() * (expenseCategories.length - 1));
}

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: Add {isIncome ? "Income " : "Expense "}
      for ${amount} in <span className="category">Category</span>{" "}
      {isIncome
        ? incomeCategories[randomIndex].type
        : expenseCategories[randomIndex].type}{" "}
      for {isIncome ? "Monday " : "Tuesday "}
    </div>
  );
};

export default InfoCard;
