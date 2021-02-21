import { Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next/";
import incontructor from "../../images/incontructor.svg";
const Incontructor = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile">
      <Grid container justify="center" alignItems="center">
        <img className="incontructorImg" src={incontructor} alt="" />
        <p>
          <b>{t("in_contructor.title")}</b>
          <br />
          {t("in_contructor.content")}
        </p>
      </Grid>
    </div>
  );
};

export default Incontructor;
