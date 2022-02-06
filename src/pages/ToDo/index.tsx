import { useState, useEffect } from "react";
import classes from "./index.module.css";
import { Grid, Fade } from "@mui/material";
import Header from "./Header";
import Options from "./Options";
import theme from "../../theme";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
