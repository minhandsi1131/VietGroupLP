import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import SectionRating from ".";
import SectionRatingComponent from "../../../components/SectionRatingComponent";
import person1 from "../../../images/person1.svg";
import person2 from "../../../images/person2.svg";
import person3 from "../../../images/person3.svg";
import person4 from "../../../images/person4.svg";
import person5 from "../../../images/person5.svg";
import Rating from "@material-ui/lab/Rating";
import { useTranslation } from "react-i18next/";
const RatingView = () => {
  const { t } = useTranslation();
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  return (
    <Grid id="sectionRating" onClick={handleClick} className="SectionRating">
      <p className="title">{t("sectionRating.customer_feedback")}</p>
      <div className="line" />
      <Grid direction="row" container justify="center" alignItems="center">
        <SectionRatingComponent img={person1} name="person1" />
        <SectionRatingComponent img={person2} name="person1" />
        <SectionRatingComponent img={person3} isMain={true} name="person1" />
        <SectionRatingComponent img={person4} name="person1" />
        <SectionRatingComponent img={person5} name="person1" />
      </Grid>
      <Grid justify="center" alignItems="center" className={classes.root}>
        <Rating
          style={{ marginTop: 22, marginBottom: 22 }}
          size={"large"}
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
        <p className="comment">
          {t("sectionRating.customer_feedback_content")}
        </p>
        <p className="author"> {t("sectionRating.customer_name")}</p>
      </Grid>
      <SectionRating
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </Grid>
  );
};

export default RatingView;
