import type { FC } from "react";
import { Grid } from "@mui/material";
import { AddSharp } from "@mui/icons-material";
import Button from "../../components/Button";
const Options: FC = () => {
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
        href='/history'
        endIcon={<AddSharp fontSize='small' />}>
        Add todo
      </Button>
    </Grid>
  );
};

export default Options;
