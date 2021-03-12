import React from "react";
import Badge from "@material-ui/core/Badge";
import { Avatar } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const SectionRatingComponent = ({ img, name, isMain }) => {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(Badge);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      paddingRight: 50,
      paddingLeft: 50,
    },
    main: {
      width: 174,
      height: 174,
    },
    normal: {
      width: 102,
      height: 102,
    },
  }));
  const classes = useStyles();
  return (
    <div id={name} className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <Avatar
          className={isMain ? classes.main : classes.normal}
          alt={name}
          src={img}
        />
      </StyledBadge>
    </div>
  );
};

export default SectionRatingComponent;
