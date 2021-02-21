import React from "react";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import "./style.scss";
import person1 from "../../../images/person1.svg";

import SlideItem from "./SlideItem";
import { useTranslation } from "react-i18next/";
const SectionRating = ({ handleOpen, setHandleOpen, isMobile }) => {
  const { t } = useTranslation();
  return (
    <div>
      <AutoRotatingCarousel
        ButtonProps={{ color: "default", variant: "contained" }}
        label={t("sectionRating.thanks")}
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <SlideItem
          img={person1}
          title={t("sectionRating.customer_feedback_title")}
          author={t("sectionRating.customer_name")}
          subtitle={t("sectionRating.customer_feedback_content")}
        />
        <SlideItem
          img={person1}
          title={t("sectionRating.customer_feedback_title")}
          author={t("sectionRating.customer_name")}
          subtitle={t("sectionRating.customer_feedback_content")}
        />
        <SlideItem
          img={person1}
          title={t("sectionRating.customer_feedback_title")}
          author={t("sectionRating.customer_name")}
          subtitle={t("sectionRating.customer_feedback_content")}
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default SectionRating;
