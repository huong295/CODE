import React from "react";
import BigBoldLabel from "../../../atoms/Labels/BoldLabels/BigBoldLabel/BigBoldLabel.atom";
import BigSlightLabel from "../../../atoms/Labels/SlightLabels/BigSlightLabel/BigSlightLabel.atom";
import Box from "@mui/material/Box";
import classes from "./BigDetailLabel.module.scss";
const BigDetailLabel = () => {
  return (
    <Box sx={{ display: "flex" }} className = {classes.bigDetailLabel}>
      <div className={classes.bigDetailLabelBigBoldLabel}>
        <BigBoldLabel title="15" />
      </div>

      <div className={classes.bigDetailLabelBigSlightLabel}>
        <BigSlightLabel title="℃" />
      </div>
    </Box>
  );
};
export default BigDetailLabel;
