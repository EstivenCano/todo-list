import type { FC } from "react";
import { useState, useEffect } from "react";
import {
  Collapse,
  Grid,
  Typography,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { Todo } from "../../models/todo";
import { useToDoContext } from "../../store/ToDoContext";

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem: FC<TodoItemProps> = ({ todo, index }) => {
  const { dispatch } = useToDoContext();
  const [loaded, setLoaded] = useState(false);

  const handleDelete = () => {
    dispatch({ type: "REMOVE_TODO", payload: todo });
  };

  const handleEdit = () => {
    dispatch({ type: "SET_EDITING", payload: true });
    dispatch({ type: "SET_TODO_TO_UPDATE", payload: todo });
  };

  const handleComplete = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo });
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Collapse
      in={loaded}
      timeout='auto'
      sx={{
        ".MuiCollapse-wrapper": {
          display: "flex",
          minHeight: "80px",
        },
      }}>
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
            checked={todo.completed}
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
              textDecoration: todo.completed ? "line-through" : "none",
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
          <IconButton onClick={handleEdit}>
            <Edit color='primary' />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <Delete color='error' />
          </IconButton>
        </Grid>
      </Grid>
    </Collapse>
  );
};

export default TodoItem;
