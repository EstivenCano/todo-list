/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import classes from "./index.module.css";
import { Grid, Fade } from "@mui/material";
import Header from "./Header";
import Options from "./Options";
import theme from "../../theme";
import ToDoList from "./ToDoList";
import { useToDoContext } from "../../store/ToDoContext";
import { Todo } from "../../models/todo";
import useAxios from "axios-hooks";

const ToDo = () => {
  const { state, dispatch } = useToDoContext();
  const [{ data, loading }] = useAxios("/todos");
  const [{}, executePost] = useAxios(
    {
      url: "/todos",
      method: "POST",
      data: state.todoList,
    },
    { manual: true }
  );

  const checkTodoStorage = () => {
    if (localStorage.getItem("todoList")) {
      const todoList = data.todos as Todo[];
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
    data && state.todoList.length === 0 && checkTodoStorage();
  }, [data]);

  useEffect(() => {
    state.todoList.length >= 0 && executePost();
  }, [state.todoList]);

  return (
    <Fade in={!loading} timeout={1200}>
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
