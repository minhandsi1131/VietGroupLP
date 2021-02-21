import { Grid } from "@material-ui/core";
import React from "react";
import Feature from "../Feature";
import "./style.scss";

const SectionFeature = ({
  feature1,
  feature2,
  feature3,
  mainTitle,
  title1,
  title2,
  title3,
  subTitle1,
  subTitle2,
  subTitle3,
}) => {
  return (
    <div
      id="sectionFeature"
      style={{ paddingTop: 20, paddingBottom: 20 }}
      className="SectionFeature"
    >
      <p className="title">{mainTitle}</p>
      <div className="line" />
      <div style={{ paddingTop: 60, paddingBottom: 60 }}>
        <Grid container direction="row">
          <Feature img={feature1} title={title1} subtitle={subTitle1} />
          <Feature img={feature2} title={title2} subtitle={subTitle2} />
          <Feature img={feature3} title={title3} subtitle={subTitle3} />
        </Grid>
      </div>
    </div>
  );
};

export default SectionFeature;
