import type { FC, FormEvent } from "react";
import classes from "./NewTodo.module.css";
import { Grid, Typography, Button } from "@mui/material";
import CustomTextField from "../../components/TextField";
import { useToDoContext } from "../../store/ToDoContext";

const NewTodo: FC = () => {
  const { state, dispatch } = useToDoContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "CLOSE_FORM" });
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
          label='New todo'
          variant='outlined'
          type='text'
          name='new-todo'
          multiline
          fullWidth
          className={classes["new-todo-form-input"]}
        />
        <Grid item xs={12} md={7}>
          <CustomTextField
            label='Due Date'
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
