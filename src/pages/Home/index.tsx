import { useState, useEffect } from "react";
import type { FC } from "react";
import classes from "./index.module.css";
import { Typography, Grid, Fade } from "@mui/material";
import Button from "../../components/Button";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

const reasonsToUse = [
  "Organize all your daily tasks in one place and get them done.",
  "Keep track of your daily expenses and get a clear overview.",
  "Bring back your productivity and focus on your goals instead of distractions.",
  "Never forget anything again.",
];

const Home: FC = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Fade in={loaded} timeout={1200}>
      <Grid container className={classes["App"]} rowGap={7}>
        <Grid item md={6} xs={12}>
          <Typography
            variant='h1'
            className={classes["title"]}
            sx={{
              textShadow: "5px 5px 5px " + theme.palette.background.default,
              fontSize: "4rem",
            }}>
            TODO List project
          </Typography>
          <div className={classes["logo-container"]}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png'
              className={classes["logo"]}
              alt='logo'
            />
          </div>
          <Typography
            variant='h3'
            className={classes["title"]}
            sx={{
              textShadow: "5px 5px 5px " + theme.palette.background.default,
            }}>
            Project ready
          </Typography>
        </Grid>
        <Grid container item md={6} xs={12} rowGap={5}>
          <Grid item xs={12}>
            <Typography
              variant='h2'
              sx={{
                textShadow: "5px 5px 5px " + theme.palette.background.default,
              }}>
              Why use this project?
            </Typography>
          </Grid>
          <Grid container item xs={12} rowGap={2} alignItems='flex-start'>
            {reasonsToUse.map((reason, index) => (
              <Grid item xs={12} key={index}>
                <Typography
                  align='left'
                  variant='h6'
                  sx={{
                    textShadow:
                      "5px 5px 5px " + theme.palette.background.default,
                  }}>
                  ✅ {reason}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            item
            xs={12}
            rowGap={2}
            alignItems='center'
            justifyContent='center'>
            <Button
              onClick={() => navigate("/todo")}
              endIcon={<CheckBoxIcon />}>
              <Typography variant='h5'>Lets get started</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Home;
