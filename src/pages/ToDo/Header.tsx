import type { FC } from "react";
import { Grid, Typography } from "@mui/material";
import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <Grid
      item
      xs={12}
      container
      flexDirection='row'
      alignSelf='flex-start'
      alignItems='center'
      justifyContent='center'>
      <div className={classes["logo-container"]}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png'
          className={classes["logo"]}
          alt='logo'
        />
      </div>
      <Typography variant='h3' m={2} className={classes["title"]}>
        TODO List project
      </Typography>
    </Grid>
  );
};

export default Header;
