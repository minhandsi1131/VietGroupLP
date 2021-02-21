import React from "react";
import "./style.scss";
import lotus from "../../../images/lotus_white.svg";
import icon_fb from "../../../images/icon_fb.svg";
import icon_tiktok from "../../../images/icon_tiktok.svg";

import { useTranslation } from "react-i18next/";
import Button from "../../../components/Button";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id="footer" className="Footer">
      <div className="row">
        <div className="Address flex1">
          <p className="simple_text">{t("footer.footer_description")}</p>
          <div className="row">
            <div className="flex1">
              <p className="title">{t("footer.address")}</p>
              <p className="simple_text">{t("footer.address_detail")}</p>
            </div>
            <div className="flex1 marginLeft">
              <p className="title">{t("footer.contact")}</p>
              <p className="simple_text">{t("footer.contact_detail")}</p>
            </div>
          </div>
        </div>
        <div className="ContactBox flex1">
          <p className="title">{t("footer.contact_us")}</p>
          <form action="#">
            <div className="row">
              <div className="column flex1">
                <label for="fname">{t("footer.full_name")}</label>
                <input type="text" id="fname" name="fname" />
              </div>
              <div className="column flex1 marginLeft">
                <label for="lname">{t("footer.email")}</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>
            <div className="column marginTop">
              <label for="lname">{t("footer.content")}</label>
              <textarea rows="10" cols="50" id="lname" name="lname" />
            </div>
            <Button isSquare={true} label={t("footer.send")} />
          </form>
        </div>
      </div>
      <div className="underFooter">
        <ul className="container">
          <li className="row">
            <li className="row headerContainer">
              <img className="marginRight12" src={lotus} alt="vg_small_logo" />
              <p className="marginRight" href="#home">
                Viet Group
              </p>
            </li>
            <li>
              <a class="active" href="#home">
                {t("footer.security")}
              </a>
            </li>
            <li>
              <a href="#news"> {t("footer.rules")}</a>
            </li>
            <li>
              <a href="#contact"> {t("footer.FAQ")}</a>
            </li>
          </li>
          <li className="tagSocial">
            <a href="https://www.facebook.com/VietGroups">
              <img src={icon_fb} class="" alt="" />
            </a>
            <a href="https://www.tiktok.com/@fonehouse.nb?lang=en">
              <img src={icon_tiktok} class="" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
