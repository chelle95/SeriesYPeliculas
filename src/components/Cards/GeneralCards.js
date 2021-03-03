import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: "10px",
    marginTop: "20px",
    width: "150px",
    height: "250px",
    cursor: "pointer",
  },
  imageSize: {
    width: "150px",
    height: "200px",
  },
});
const GeneralCards = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.imageSize}
        src={props.image}
        alt="ImgSAndMovies"
      ></img>
      <div>{props.title}</div>
    </div>
  );
};

export default GeneralCards;
