import React, { Fragment, useEffect, useState } from "react";
import GeneralCards from "../components/Cards/GeneralCards";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const Series = () => {
  const [error, setError] = useState(false);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const getSeries = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3004/entries");
      const resData = await response.json();
      const filtredSeries = resData.filter((data) => {
        return data.programType === "series";
      });
      const filteredYear = filtredSeries.filter((data) => {
        return data.releaseYear > 2010;
      });
      filteredYear.sort((data1, data2) => {
        if (data1.title < data2.title) {
          return -1;
        } else {
          return 1;
        }
      });
      const allSeries = filteredYear.slice(0, 20);
      setSeries(await allSeries);
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
            {series.map((serie) => (
              <Fragment>
                <Grid>
                  <GeneralCards
                    image={serie.images["Poster Art"].url}
                    title={serie.title}
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
    getSeries();
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

export default Series;
