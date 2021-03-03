import { makeStyles, Typography, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(/placeholder.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "black",
    width: "160px",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  title: {
    color: "#fffff",
  },
  responsiveCards: {
    [theme.breakpoints.down("xs")]: {
      //width: "100px",
    },
  },
}));

const CardSyP = (props) => {
  const handleClick = () => {
    props.history.push(`/${props.title.toLowerCase()}`);
  };
  const CustomTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={handleClick}>
      <Container>
        <Grid container>
          <Grid className="responsiveCards">
            <CustomTypography variant="h5">{props.title}</CustomTypography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withRouter(CardSyP);
