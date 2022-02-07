import type { FC } from "react";
import { Grid, Collapse, Typography } from "@mui/material";
import { useToDoContext } from "../../store/ToDoContext";
import classes from "./ToDoList.module.css";
import theme from "../../theme";
import TodoItem from "./TodoItem";
import { TransitionGroup } from "react-transition-group";
import NewTodo from "./NewTodo";

const ToDoList: FC = () => {
  const { state } = useToDoContext();
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
      {todoList.filter((todo) => !todo.completed).length === 0 && (
        <Typography variant='h5'>No ToDo's yet</Typography>
      )}
      <TransitionGroup
        style={{
          width: "100%",
        }}>
        {todoList
          .filter((todo) => !todo.completed)
          .map((todo, index) => (
            <Collapse key={todo.id}>
              <TodoItem todo={todo} index={index} />
            </Collapse>
          ))}
      </TransitionGroup>
    </Grid>
  );
};

export default ToDoList;
