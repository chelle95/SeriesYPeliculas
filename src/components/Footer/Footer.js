import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#393e46",
    width: "100%",
    height: "300px",
  },
  info: {
    width: "60%",
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  text: {
    color: "white",
  },
  copyright: {
    color: "white",
  },
  icons: {
    maxHeight: "30px",
    display: "flex",
    justifyContent: "space-between",
    width: "10%",

    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
  },
  iconF: {
    width: "15px",
  },
  icon: {
    width: "25px",
  },
  store: {
    width: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      marginTop: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  social: {
    marginTop: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "50%",
      flexDirection: "column",
    },
  },
  windsowStore: {
    width: "114px",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container>
        <div>
          <ul className={classes.info}>
            <li>
              <p className={classes.text}>Home </p>
            </li>
            <li>
              <p className={classes.text}>Terms and Conditions </p>
            </li>
            <li>
              <p className={classes.text}>Privacy Policy </p>
            </li>
            <li>
              <p className={classes.text}>Collection Statent </p>
            </li>
            <li>
              <p className={classes.text}>Help </p>
            </li>
            <li>
              <p className={classes.text}>Manage Account </p>
            </li>
          </ul>
        </div>
        <div>
          <p className={classes.copyright}>
            Copyright 2016 DEMO Streaming All Rights Reserved.
          </p>
        </div>
        <div className={classes.social}>
          <div className={classes.icons}>
            <img
              className={classes.iconF}
              src="/facebook-white.svg"
              alt="facebookIcon"
            />
            <img
              className={classes.icon}
              src="/twitter-white.svg"
              alt="TwitterIcon"
            />
            <img
              className={classes.icon}
              src="/instagram-white.svg"
              alt="IntagramIcon"
            />
          </div>

          <div className={classes.store}>
            <img src="/app-store.svg" alt="ImgAppStore"></img>
            <img src="/play-store.svg" alt="ImgPlayStore"></img>
            <img
              className={classes.windsowStore}
              src="/windows-store.svg"
              alt="ImgWindowsStore"
            ></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
