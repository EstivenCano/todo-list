import type { FC } from "react";
import { Grid, Collapse } from "@mui/material";
import { useToDoContext } from "../../store/ToDoContext";
import classes from "./ToDoList.module.css";
import theme from "../../theme";

import NewTodo from "./NewTodo";

const ToDoList: FC = () => {
  const { state, dispatch } = useToDoContext();
  const { openForm } = state;
  return (
    <Grid
      container
      item
      flexDirection='column'
      xs={8}
      justifyContent='center'
      bgcolor={theme.palette.background.paper}
      className={classes["container"]}>
      <Collapse in={openForm}>
        <NewTodo />
      </Collapse>
    </Grid>
  );
};

export default ToDoList;
