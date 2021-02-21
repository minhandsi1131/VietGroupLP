import React from "react";
import "./style.scss";
import vg_2 from "../../../images/vg_2.svg";
import Button from "../../../components/Button";
import { useTranslation } from "react-i18next";
const SectionRegister = () => {
  const { t } = useTranslation();
  return (
    <div className="SectionRegister">
      <div className="container row ">
        <img className="flex1" src={vg_2} class="" alt="vg2" />
        <div className="contentRegister flex1">
          <p className="subTitle">{t("sectionRegister.Doyouinterested")}</p>
          <p className="title">{t("sectionRegister.JoinVietGroup")}</p>
          <p className="content">{t("sectionRegister.Content")}</p>
          <Button label={t("sectionRegister.RegisterAccount")} />
        </div>
      </div>
    </div>
  );
};

export default SectionRegister;
