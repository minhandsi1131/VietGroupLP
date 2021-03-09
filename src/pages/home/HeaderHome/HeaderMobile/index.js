import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import PermContactCalendarSharpIcon from "@material-ui/icons/PermContactCalendarSharp";
import vg_logo_small from "../../../../images/vg_logo_small.svg";
import { useTranslation } from "react-i18next";
import vietnam from "../../../../images/vietnam.svg";
import japan from "../../../../images/japan.svg";
import american from "../../../../images/american.svg";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const HeaderMobile = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const renderHref = (index) => {
    switch (index) {
      case 0:
        return "#sectionRating";

      case 1:
        return "#sectionFeature";

      case 2:
        return "#footer";
      default:
        break;
    }
  };
  const renderIcon = (index) => {
    switch (index) {
      case 0:
        return <CommentOutlinedIcon />;

      case 1:
        return <FeaturedPlayListOutlinedIcon />;

      case 2:
        return <PermContactCalendarSharpIcon />;
      default:
        break;
    }
  };
  return (
    <div id="mobile_menu" className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="white"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={vg_logo_small} alt="logo" />
          {!open && <p>{t("headerMenu.Title")}</p>}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            t("headerMenu.CustomerFeedBack"),
            t("headerMenu.Feature"),
            t("headerMenu.Contact"),
          ].map((text, index) => (
            <a href={renderHref(index)}>
              <ListItem button key={text}>
                <ListItemIcon>{renderIcon(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
          <div className="flag_mobile">
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
          </div>
        </List>
      </Drawer>
    </div>
  );
};
export default HeaderMobile;
