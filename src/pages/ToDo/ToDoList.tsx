import type { FC } from "react";
import { Grid, Collapse } from "@mui/material";
import classes from "./ToDoList.module.css";
import theme from "../../theme";

import NewTodo from "./NewTodo";

const ToDoList: FC = () => {
  return (
    <Grid
      container
      item
      flexDirection='column'
      xs={8}
      justifyContent='center'
      bgcolor={theme.palette.background.paper}
      className={classes["container"]}>
      <NewTodo />
    </Grid>
  );
};

export default ToDoList;
