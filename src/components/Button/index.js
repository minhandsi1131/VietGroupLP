import React from "react";
import "./style.scss";
import Dialog from "../Dialog";
import { useTranslation } from "react-i18next/";
const Button = ({ label, isSquare }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (isSquare) {
    return (
      <>
        <button
          onClick={handleClickOpen}
          type="button"
          name=""
          id="btn_square"
          class="btn btn-primary"
          btn-lg
        >
          <p className="label">{label}</p>
        </button>
        <Dialog
          title={t("alert.title")}
          content={t("alert.content")}
          agree={t("alert.agree")}
          handleClose={handleClose}
          open={open}
        />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={handleClickOpen}
          type="button"
          name=""
          id="btn_download"
          class="btn btn-primary"
          btn-lg
        >
          <p className="label">{label}</p>
        </button>
        <Dialog
          title={t("alert.title")}
          content={t("alert.content")}
          agree={t("alert.agree")}
          handleClose={handleClose}
          open={open}
        />
      </>
    );
  }
};

export default Button;
