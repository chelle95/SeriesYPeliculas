import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Content from "../components/Content/Content";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Content />
      <div className={classes.root}></div>
    </div>
  );
};

export default Home;
