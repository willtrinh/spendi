import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { AppContext } from "../../../context/context.js";
import { v4 as uuidv4 } from "uuid";
import useStyles from "./styles.js";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories.js";
// import moment from "moment";
// import formatDate from "../../../utils/formatDate.js";
const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState(initialState.date);

  const handleDateChange = (date) => {
    formData.date = date;
    setSelectedDate(date);
  };

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    // reset to initial state so user can add new transaction
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((cat) => (
              <MenuItem key={cat.type} value={cat.type}>
                {cat.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        {/* <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
         */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            id="date-picker-dialog"
            label="Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Add Transaction
      </Button>
    </Grid>
  );
};

export default Form;
