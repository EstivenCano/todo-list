import type { FC, FormEvent } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./NewTodo.module.css";
import { Grid, Typography, Button } from "@mui/material";
import CustomTextField from "../../components/TextField";
import { useToDoContext } from "../../store/ToDoContext";

const NewTodo: FC = () => {
  const { state, dispatch } = useToDoContext();
  const newTodoRef = useRef<HTMLInputElement>();
  const dueDateRef = useRef<HTMLInputElement>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch({
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

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    cleanForm();
    dispatch({ type: "CLOSE_FORM" });
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
        padding={5}
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
          columnGap={5}>
          <Button
            type='submit'
            color='primary'
            variant='contained'
            className={classes["new-todo-form-button"]}>
            Add
          </Button>
          <Button
            type='reset'
            color='error'
            variant='contained'
            className={classes["new-todo-form-button"]}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default NewTodo;
