import React from "react";
import "./style.scss";
import HeaderHome from "./HeaderHome";
import SectionHeader from "./SectionHeader";
import SectionRegister from "./SectionRegister";
import SectionFeature from "../../components/SectionFeature";
import feature1 from "../../images/feature1.svg";
import feature2 from "../../images/feature2.svg";
import feature3 from "../../images/feature3.svg";
import feature4 from "../../images/feature4.svg";
import feature5 from "../../images/feature5.svg";
import feature6 from "../../images/feature6.svg";
import Footer from "./Footer";
import SectionFeatureDetail from "./SectionFeatureDetail";
import RatingView from "./SectionRating/RatingView";
import Incontructor from "../inContructor";
import { useTranslation } from "react-i18next";
import HeaderMobile from "./HeaderHome/HeaderMobile";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <HeaderHome />
        <HeaderMobile />
        <SectionHeader />
        <SectionRegister />
        <SectionFeature
          mainTitle={t("sectionFeature.mainTitle1")}
          feature1={feature1}
          feature2={feature2}
          feature3={feature3}
          title1={t("sectionFeature.title1")}
          subTitle1={t("sectionFeature.subTitle1")}
          title2={t("sectionFeature.title2")}
          subTitle2={t("sectionFeature.subTitle2")}
          title3={t("sectionFeature.title3")}
          subTitle3={t("sectionFeature.subTitle3")}
        />
        <SectionFeatureDetail />
        <SectionFeature
          mainTitle={t("sectionFeature.mainTitle2")}
          feature1={feature4}
          feature2={feature5}
          feature3={feature6}
          title1={t("sectionFeature.title4")}
          subTitle1={t("sectionFeature.subTitle4")}
          title2={t("sectionFeature.title5")}
          subTitle2={t("sectionFeature.subTitle5")}
          title3={t("sectionFeature.title6")}
          subTitle3={t("sectionFeature.subTitle6")}
        />
        <RatingView />
        <Footer />
      </div>
      <Incontructor />
    </div>
  );
};
export default Home;
