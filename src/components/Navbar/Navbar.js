import React from "react";

import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#28527a",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      overflowX: "hidden",
    },
  },
  LogIn: {
    display: "flex",
    justifyContent: "space-between",
  },
  titulo: {
    backgroundColor: "#393e46",
  },
  loguearse: {
    marginRight: "25px",
    color: "white",
  },
  mesGratis: {
    backgroundColor: "#393e46",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  demo: {
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));
const Navbar = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    props.history.push("/");
  };

  return (
    <div>
      <AppBar className={classes.root} position="sticky">
        <Container>
          <Toolbar className={classes.LogIn}>
            <div>
              <Typography
                onClick={handleClick}
                className={classes.demo}
                variant="h4"
              >
                DEMO Streaming
              </Typography>
            </div>
            <div>
              <Button className={classes.loguearse}>Log in</Button>
              <Button className={classes.mesGratis}>
                Star your free trial
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar className={classes.titulo} position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h5">Popular Titles</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
