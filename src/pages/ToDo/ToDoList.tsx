import type { FC } from "react";
import { Grid, Collapse, Typography } from "@mui/material";
import { useToDoContext } from "../../store/ToDoContext";
import classes from "./ToDoList.module.css";
import theme from "../../theme";
import TodoItem from "./TodoItem";

import NewTodo from "./NewTodo";

const ToDoList: FC = () => {
  const { state, dispatch } = useToDoContext();
  const { openForm, todoList, editing } = state;
  return (
    <Grid
      container
      item
      flexDirection='column'
      xs={10}
      md={8}
      pt={4}
      pb={4}
      pl={2}
      pr={2}
      justifyContent='center'
      alignItems='normal'
      bgcolor={theme.palette.background.paper}
      className={classes["container"]}>
      <Collapse in={openForm || editing}>
        <NewTodo />
      </Collapse>
      {todoList.length === 0 && (
        <Typography variant='h5'>No ToDo's yet</Typography>
      )}
      {todoList.length > 0 && (
        <Grid container>
          <Grid item xs={12}></Grid>
        </Grid>
      )}
      {todoList.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </Grid>
  );
};

export default ToDoList;
