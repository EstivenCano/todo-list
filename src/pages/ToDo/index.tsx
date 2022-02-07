/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import classes from "./index.module.css";
import { Grid, Fade } from "@mui/material";
import Header from "./Header";
import Options from "./Options";
import theme from "../../theme";
import ToDoList from "./ToDoList";
import { useToDoContext } from "../../store/ToDoContext";
import { Todo } from "../../models/todo";

const ToDo = () => {
  const { state, dispatch } = useToDoContext();
  const [loaded, setLoaded] = useState(false);

  const checkTodoStorage = () => {
    if (localStorage.getItem("todoList")) {
      const todoList = JSON.parse(
        localStorage.getItem("todoList") || ""
      ) as Todo[];
      todoList.forEach((todo) => {
        dispatch({
          type: "ADD_TODO",
          payload: {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            createdDate: new Date(todo.createdDate),
            ondueDate: new Date(todo.ondueDate),
          },
        });
      });
    }
  };

  useEffect(() => {
    setLoaded(true);
    checkTodoStorage();
  }, []);

  useEffect(() => {
    state.todoList.length > 0 &&
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
  }, [state.todoList]);

  return (
    <Fade in={loaded} timeout={1200}>
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
    </Fade>
  );
};

export default ToDo;
