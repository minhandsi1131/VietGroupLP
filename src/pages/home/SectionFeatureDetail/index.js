import React, { useState } from "react";
import "./style.scss";
import FeatureItem from "../../../components/FeatureItem";
import icon_map from "../../../images/icon_map.svg";
import icon_fa from "../../../images/icon_fa.svg";
import icon_cart from "../../../images/icon_cart.svg";
import chat from "../../../images/chat.svg";
import share_post from "../../../images/share_post.svg";
import photos from "../../../images/photos.svg";
import fast_food from "../../../images/fast_food.svg";
import gift_voucher from "../../../images/gift_voucher.svg";
import location_restaurant from "../../../images/location_restaurant.svg";
import { useTranslation } from "react-i18next";
import {
  Box,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  withStyles,
} from "@material-ui/core";
import vg_3 from "../../../images/vg_3.svg";
import vg_5 from "../../../images/vg_5.svg";
import vg_4 from "../../../images/vg_4.svg";
const SectionFeatureDetail = () => {
  const { t } = useTranslation();
  const [img, setimg] = useState(vg_3);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography color="#26415D">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const AntTabs = withStyles({
    root: {
      borderBottom: "1px solid #e8e8e8",
    },
    indicator: {
      backgroundColor: "#26415D",
    },
  })(Tabs);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "transparent",
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:hover": {
        color: "#26415D",
        opacity: 1,
      },
      "&$selected": {
        color: "",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        color: "#26415D",
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setimg(vg_3);
    } else if (newValue === 1) {
      setimg(vg_4);
    } else {
      setimg(vg_5);
    }
  };
  return (
    <div className="SectionFeatureDetail">
      <img className="" id="vg_3" src={img} class="" alt="" />
      <div className="sectionFeature">
        <p className="title">{t("sectionFeatureDetail.Feature")}</p>
        <p className="subTitle">{t("sectionFeatureDetail.description")}</p>
        <div className="menu">
          <div className={classes.root}>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label={t("sectionFeatureDetail.super_market")} />
              <AntTab label={t("sectionFeatureDetail.social")} />
              <AntTab label={t("sectionFeatureDetail.restaurant")} />
            </AntTabs>
            <TabPanel value={value} index={0}>
              <FeatureItem
                icon={icon_map}
                subContent={t("sectionFeatureDetail.subContent1")}
                subTitle={t("sectionFeatureDetail.subTitle1")}
              />
              <FeatureItem
                icon={icon_cart}
                subContent={t("sectionFeatureDetail.subContent2")}
                subTitle={t("sectionFeatureDetail.subTitle2")}
              />
              <FeatureItem
                icon={icon_fa}
                subContent={t("sectionFeatureDetail.subContent3")}
                subTitle={t("sectionFeatureDetail.subTitle3")}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FeatureItem
                icon={chat}
                subContent={t("sectionFeatureDetail.subContent4")}
                subTitle={t("sectionFeatureDetail.subTitle4")}
              />
              <FeatureItem
                icon={share_post}
                subContent={t("sectionFeatureDetail.subContent5")}
                subTitle={t("sectionFeatureDetail.subTitle5")}
              />
              <FeatureItem
                icon={photos}
                subContent={t("sectionFeatureDetail.subContent6")}
                subTitle={t("sectionFeatureDetail.subTitle6")}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FeatureItem
                icon={fast_food}
                subContent={t("sectionFeatureDetail.subContent7")}
                subTitle={t("sectionFeatureDetail.subTitle7")}
              />
              <FeatureItem
                icon={gift_voucher}
                subContent={t("sectionFeatureDetail.subContent8")}
                subTitle={t("sectionFeatureDetail.subTitle8")}
              />
              <FeatureItem
                icon={location_restaurant}
                subContent={t("sectionFeatureDetail.subContent9")}
                subTitle={t("sectionFeatureDetail.subTitle9")}
              />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFeatureDetail;
