import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, AttachMoney } from "@material-ui/icons";
import { AppContext } from "../../../context/context.js";
import useStyles from "./styles.js";
import moment from "moment";
const List = () => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(AppContext);
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: moment().format("ll"),
    },
    {
      id: 2,
      type: "Expense",
      category: "Gym",
      amount: 100,
      date: moment().format("ll"),
    },
    {
      id: 3,
      type: "Expense",
      category: "Grocery",
      amount: 100,
      date: moment().format("ll"),
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unMountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <AttachMoney />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
