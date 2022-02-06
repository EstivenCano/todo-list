import type { FC } from "react";
import { useState, useEffect } from "react";
import classes from "./index.module.css";
import { Grid, Typography, Fade } from "@mui/material";
import Button from "../../components/Button";

const NotFound: FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Fade in={loaded} timeout={1200}>
      <Grid
        container
        flexDirection='column'
        className={classes["App"]}
        rowGap={7}>
        <Typography variant='h1' fontWeight='500'>
          404 - Not Found!
        </Typography>
        <Button href='/'>
          <Typography variant='h6' fontWeight='300'>
            Go Home
          </Typography>
        </Button>
      </Grid>
    </Fade>
  );
};

export default NotFound;
