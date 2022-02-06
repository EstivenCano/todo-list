import classes from "./index.module.css";
import { Typography, Grid } from "@mui/material";
import Header from "./Header";
import Options from "./Options";
import theme from "../../theme";
import ToDoList from "./ToDoList";

const ToDo = () => {
  return (
    <Grid
      container
      flexDirection='column'
      alignItems='center'
      justifyContent='flex-start'
      rowGap={2}
      border={`1px ${theme.palette.primary.main} dashed`}
      className={classes["App"]}>
      <Header />
      <Options />
      <ToDoList />
    </Grid>
  );
};

export default ToDo;
