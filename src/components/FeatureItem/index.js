import React from "react";
import "./style.scss";

const FeatureItem = ({ icon, subTitle, subContent }) => {
  return (
    <div className="row marginTop">
      <img src={icon} class="" alt="" />
      <div className="marginLeft">
        <p className="miniTitle">{subTitle}</p>
        <p className="miniContent">{subContent}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
