import type { FC } from "react";
import { Grid } from "@mui/material";
import { AddSharp } from "@mui/icons-material";
import { useToDoContext } from "../../store/ToDoContext";
import Button from "../../components/Button";

const Options: FC = () => {
  const { dispatch } = useToDoContext();

  const handleNewForm = () => {
    dispatch({ type: "OPEN_FORM" });
  };

  return (
    <Grid
      container
      item
      xs={12}
      alignContent='center'
      justifyContent='center'
      columnGap={2}>
      <Button href='/'>Go home</Button>
      <Button href='/history'>Todo history</Button>
      <Button
        color='success'
        onClick={handleNewForm}
        endIcon={<AddSharp fontSize='small' />}>
        Add todo
      </Button>
    </Grid>
  );
};

export default Options;
