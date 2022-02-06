import type { FC } from "react";
import classes from "./index.module.css";
import { Grid, Typography } from "@mui/material";
import Button from "../../components/Button";

const NotFound: FC = () => (
  <Grid container flexDirection='column' className={classes["App"]} rowGap={7}>
    <Typography variant='h1' fontWeight='500'>
      404 - Not Found!
    </Typography>
    <Button href='/'>
      <Typography variant='h6' fontWeight='300'>
        Go Home
      </Typography>
    </Button>
  </Grid>
);

export default NotFound;
