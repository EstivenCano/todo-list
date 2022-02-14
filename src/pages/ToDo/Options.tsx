import type { FC } from "react";
import { Grid } from "@mui/material";
import { AddSharp } from "@mui/icons-material";
import { useToDoContext } from "../../store/ToDoContext";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Options: FC = () => {
  const { state, dispatch } = useToDoContext();
  const navigate = useNavigate();

  const handleNewForm = () => {
    dispatch({ type: "OPEN_FORM" });
  };

  const handleActiveHistoryMode = () => {
    dispatch({ type: "ACTIVE_HISTORY_MODE" });
  };

  const handleDeactiveHistoryMode = () => {
    dispatch({ type: "DEACTIVE_HISTORY_MODE" });
  };

  return (
    <Grid
      container
      item
      xs={12}
      alignContent='center'
      justifyContent='center'
      columnGap={2}>
      <Button onClick={() => navigate("/")} aria-label='Go home'>
        Go home
      </Button>
      {!state.historyMode ? (
        <Button onClick={handleActiveHistoryMode} aria-label='ToDo history'>
          Todo history
        </Button>
      ) : (
        <Button onClick={handleDeactiveHistoryMode} aria-label='New ToDo'>
          Actual Todos
        </Button>
      )}

      <Button
        color='success'
        aria-label='Add ToDo'
        onClick={handleNewForm}
        endIcon={<AddSharp fontSize='small' />}>
        Add todo
      </Button>
    </Grid>
  );
};

export default Options;
