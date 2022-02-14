import type { FC } from "react";
import { useState } from "react";
import { Grid, Typography, Collapse, Box } from "@mui/material";
import classes from "./DevInfo.module.css";

const DevInfo: FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box
      className={`${classes["card"]} ${open && classes["card_open"]}`}
      onClick={handleOpen}>
      <Collapse in={open} collapsedSize={0} orientation='horizontal'>
        <Grid container justifyContent='center'>
          <Typography variant='h6' color='white'>
            Developed by - Estiven Cano
          </Typography>
        </Grid>
        <Grid
          container
          className={classes["social-networks"]}
          justifyContent='center'
          columnGap={3}>
          <Grid item>
            <a
              href='https://github.com/EstivenCano'
              rel='noreferrer'
              target='_blank'>
              <img
                src='https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU'
                alt='github'
                height={40}
                width={40}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              href='https://www.linkedin.com/in/estivencano/'
              rel='noreferrer'
              target='_blank'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png'
                alt='linkedin'
                height={40}
                width={40}
              />
            </a>
          </Grid>
        </Grid>
        <Typography variant='subtitle2' className={classes["card-subtitle"]}>
          Developer info
        </Typography>
      </Collapse>
    </Box>
  );
};

export default DevInfo;
