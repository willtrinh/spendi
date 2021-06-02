import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  intent: {
    fontWeight: "bold",
    color: "steelblue",
  },
  income: {
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "3px solid green",
  },
  expense: {
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "3px solid red",
  },
}));
