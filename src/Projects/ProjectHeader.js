import React from "react";
import {
  Button,
  Typography,
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Box, breakpoints } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { theme } from "../Components/GlobalTheme";

const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
  },

  myBreak: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  space: {
    flex: 1,
  },
}));

const ProjectHeader = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Box className={classes.box}>
            <HomeIcon />
            <Typography className={classes.myBreak}>Home</Typography>
          </Box>
          <div className={classes.space}>
            <Avatar className={classes.myBreak} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ProjectHeader;
