import React from "react";
import "./style.scss";
import vg1 from "../../../images/vg_1.svg";
import vg_logo from "../../../images/logovietgrp.svg";
import appStore from "../../../images/appStore.svg";
import googlePlay from "../../../images/googlePlay.svg";
import Button from "../../../components/Button";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const SectionHeader = () => {
  const { t } = useTranslation();
  return (
    <Grid id="sectionHeader" container className="sectionHeader">
      <Grid container justify="center" alignItems="center" xs={12} md={6}>
        <div className="container">
          <img src={vg_logo} width={200} height={200} alt="vg_logo" />
          <p className="title">{t("sectionHeader.SocialMediaConnectPeople")}</p>
          <Button label={t("sectionHeader.DowloadApp")} />
          <div className="row flag">
            <img id="img_1" src={appStore} alt="appStore" />
            <img id="img_2" src={googlePlay} alt="googlePlay" />
          </div>
        </div>
      </Grid>
      <Grid container justify="center" alignItems="center" xs={12} md={6}>
        <img src={vg1} id="vg_1" width={296} height={587} alt="vg1" />
      </Grid>
    </Grid>
  );
};
export default SectionHeader;
