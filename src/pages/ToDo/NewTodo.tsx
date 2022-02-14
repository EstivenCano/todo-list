/* eslint-disable react-hooks/exhaustive-deps */
import type { FC, FormEvent } from "react";
import { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./NewTodo.module.css";
import { Grid, Typography } from "@mui/material";
import Button from "../../components/Button";
import CustomTextField from "../../components/TextField";
import { useToDoContext } from "../../store/ToDoContext";
import { Todo } from "../../models/todo";

const NewTodo: FC = () => {
  const { state, dispatch } = useToDoContext();
  const newTodoRef = useRef<HTMLInputElement>();
  const dueDateRef = useRef<HTMLInputElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: uuidv4(),
        title: newTodoRef?.current?.value || "",
        ondueDate: new Date(dueDateRef?.current?.value || ""),
        completed: false,
        createdDate: new Date(),
      },
    });
    cleanForm();
  };

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        id: state.todoToUpdate.id,
        title: newTodoRef?.current?.value || "",
        ondueDate: new Date(dueDateRef?.current?.value || ""),
        completed: state.todoToUpdate.completed,
        createdDate: state.todoToUpdate.createdDate,
      },
    });
    dispatch({ type: "SET_EDITING", payload: false });
    cleanForm();
  };

  useEffect(() => {
    if (state.editing) {
      newTodoRef.current!.value = state.todoToUpdate.title;
      dueDateRef.current!.value = state.todoToUpdate.ondueDate
        .toISOString()
        .split("T")[0];
    }
  }, [state.editing]);

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    cleanForm();
    dispatch({ type: "CLOSE_FORM" });
    dispatch({ type: "SET_EDITING", payload: false });
    dispatch({ type: "SET_TODO_TO_UPDATE", payload: {} as Todo });
  };

  const cleanForm = () => {
    newTodoRef.current!.value = "";
    dueDateRef.current!.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className={classes["new-todo-form"]}>
      <Grid
        container
        item
        xs={12}
        justifyContent='space-between'
        alignItems='center'
        columnGap={2}
        rowGap={2}
        pl={4}
        pr={4}
        pb={4}
        className={classes["new-todo-form-container"]}>
        <Typography variant='h5' fontWeight='300'>
          New ToDo
        </Typography>
        <CustomTextField
          inputRef={newTodoRef}
          label='New todo'
          required
          variant='outlined'
          type='text'
          name='new-todo'
          multiline
          fullWidth
          className={classes["new-todo-form-input"]}
        />
        <Grid item xs={12} md={7}>
          <CustomTextField
            inputRef={dueDateRef}
            label='Due Date'
            required
            variant='outlined'
            type='date'
            name='due-date'
            datatype='date'
            fullWidth
            className={classes["new-todo-form-input"]}
          />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          container
          justifyContent='flex-end'
          columnGap={1}>
          <Button
            type='reset'
            color='error'
            variant='contained'
            className={classes["new-todo-form-button"]}>
            Cancel
          </Button>
          {state.editing ? (
            <Button
              type='button'
              onClick={handleUpdate}
              color='primary'
              variant='contained'
              className={classes["new-todo-form-button"]}>
              Update
            </Button>
          ) : (
            <Button
              type='submit'
              color='primary'
              variant='contained'
              className={classes["new-todo-form-button"]}>
              Add
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};
export default NewTodo;
