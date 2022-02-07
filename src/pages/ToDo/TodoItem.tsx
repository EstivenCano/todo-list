import type { FC } from "react";
import { useState } from "react";
import { Grid, Typography, Checkbox, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { Todo } from "../../models/todo";
import { useToDoContext } from "../../store/ToDoContext";

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem: FC<TodoItemProps> = ({ todo, index }) => {
  const { dispatch } = useToDoContext();
  const [checked, setChecked] = useState(false);

  const handleDelete = () => {
    dispatch({ type: "REMOVE_TODO", payload: todo });
  };

  const handleEdit = () => {
    dispatch({ type: "SET_EDITING", payload: true });
    dispatch({ type: "SET_TODO_TO_UPDATE", payload: todo });
  };

  const handleComplete = () => {
    setChecked(true);
    //Set a timeout to delay when component is dismounted
    setTimeout(() => {
      dispatch({ type: "TOGGLE_TODO", payload: todo });
    }, 800);
  };

  return (
    <Grid
      item
      container
      height='100%'
      flexDirection='row'
      justifyContent='flex-start'
      alignItems='center'
      bgcolor={index % 2 === 0 ? "background.default" : "Background.paper"}>
      <Grid item xs={2} md={1}>
        <Checkbox
          onClick={handleComplete}
          checked={todo.completed || checked}
          aria-label='Mark ToDo as completed'
          sx={{
            color: "white",
          }}
        />
      </Grid>
      <Grid item xs={6} md={7} sx={{ overflow: "hidden" }}>
        <Typography
          variant='subtitle1'
          align='left'
          color='grey'
          sx={{
            whiteSpace: "nowrap",
            flexWrap: "nowrap",
            textDecoration: todo.completed || checked ? "line-through" : "none",
          }}>
          {todo.title}
        </Typography>
      </Grid>
      <Grid item xs={4} md={2}>
        <Typography variant='subtitle1' align='center'>
          {todo.ondueDate.toISOString().split("T")[0]}
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <IconButton onClick={handleEdit} aria-label='Edit ToDo'>
          <Edit color='primary' />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label='Delete ToDo'>
          <Delete color='error' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
