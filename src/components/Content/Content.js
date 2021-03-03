import React from "react";
import { Container } from "@material-ui/core";
import CardSyP from "../Cards/CardSyP";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    justifyContent: "space-between",
    marginTop: "50px",
    minHeight: "70vh",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.cards}>
          <CardSyP title="SERIES" className={classes.series} />
          <CardSyP title="MOVIES" />
        </div>
      </Container>
    </div>
  );
};

export default Content;
