import React from "react";
import { Slide } from "material-auto-rotating-carousel";
import {
  pink,
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
} from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import { Grid } from "@material-ui/core";
import "./style.scss";
const SlideItem = ({ img, author, title, subtitle }) => {
  const colors = [
    deepPurple,
    green,
    grey,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    amber,
    blue,
    blueGrey,
    brown,
    common,
    cyan,
    deepOrange,
  ];
  const colorRandom = colors[Math.floor(Math.random() * colors.length)];
  return (
    <Slide
      media={
        <Grid direction="column">
          <img src={img} alt="slideItem" />
          <p className="authorName">{author}</p>
          <div>
            <Rating
              size={"large"}
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </div>
        </Grid>
      }
      mediaBackgroundStyle={{ backgroundColor: colorRandom[50] }}
      style={{ backgroundColor: colorRandom[300] }}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default SlideItem;
