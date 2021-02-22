import { Grid } from "@material-ui/core";
import React from "react";
import "./style.scss";

const Feature = ({ img, title, subtitle }) => {
  return (
    <Grid
      container
      md={4}
      justify="center"
      alignItems="flex-start"
      className="Feature"
    >
      <Grid>
        <img src={img} width="100%" height="100%" alt="" />
      </Grid>
      <Grid container justify="center" direction="column" alignItems="center">
        <p className="titleContent">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </Grid>
    </Grid>
  );
};

export default Feature;
