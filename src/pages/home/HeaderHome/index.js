import React from "react";
import "./style.scss";
import vg_logo_small from "../../../images/vg_logo_small.svg";
import vietnam from "../../../images/vietnam.svg";
import japan from "../../../images/japan.svg";
import american from "../../../images/american.svg";
import { useTranslation } from "react-i18next";

const HeaderHome = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="HeaderHome">
      <ul className="container">
        <li className="row">
          <li className="row headerContainer">
            <img src={vg_logo_small} alt="vg_small_logo" />
            <a href="#sectionHeader">Viet Group</a>
          </li>
          <li className="line" />
          <li>
            <a href="#sectionRating">{t("headerMenu.CustomerFeedBack")}</a>
          </li>
          <li>
            <a href="#sectionFeature"> {t("headerMenu.Feature")}</a>
          </li>
          <li>
            <a href="#footer"> {t("headerMenu.Contact")}</a>
          </li>
        </li>
        <li className="row containerFlag">
          <li className="flag">
            <img
              onClick={() => changeLanguage("vn")}
              src={vietnam}
              alt="vietnam"
            />
            <img onClick={() => changeLanguage("jp")} src={japan} alt="japan" />
            <img
              onClick={() => changeLanguage("en")}
              src={american}
              alt="american"
            />
          </li>
          <li className="login">
            <a href="#about">{t("headerMenu.Login")}</a>
          </li>
        </li>
      </ul>
    </div>
  );
};
export default HeaderHome;
