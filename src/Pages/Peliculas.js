import React, { Fragment, useEffect, useState } from "react";
import GeneralCards from "../components/Cards/GeneralCards";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const Peliculas = () => {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3004/entries");
      const resData = await response.json();
      const filtredMovies = resData.filter((data) => {
        return data.programType === "movie";
      });
      const filteredYear = filtredMovies.filter((data) => {
        return data.releaseYear > 2010;
      });
      filteredYear.sort((data1, data2) => {
        if (data1.title < data2.title) {
          return -1;
        } else {
          return 1;
        }
      });
      const allMovies = filteredYear.slice(0, 20);
      setMovies(await allMovies);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };
  const renderResult = () => {
    if (error === true) {
      return (
        <Fragment>
          <div>
            <Typography>Oops, something went wrong...</Typography>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Grid container>
            {movies.map((movie) => (
              <Fragment>
                <Grid item>
                  <GeneralCards
                    image={movie.images["Poster Art"].url}
                    title={movie.title}
                  />
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Fragment>
      );
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        {loading ? (
          <Fragment>
            <div>
              <Typography>Loading...</Typography>
            </div>
          </Fragment>
        ) : (
          renderResult()
        )}
      </Container>
    </div>
  );
};

export default Peliculas;
