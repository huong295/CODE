import React from "react";
import SmallSlightLabel from "../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import NormalDetailLabel from "../../molecules/DetailLabels/NormalDetailLabel/NormalDetailLabel.molecules";
import Box from "@mui/material/Box";
import classes from "./VisibilityBox.module.scss";
const VisibilityBox = () => {
  return (
    <Box
      className={classes.visibilityBox}
      sx={{ display: "flex" , flexDirection: "column" }}
    >
      <div className = {classes.visibilityBoxDetail}>
        <SmallSlightLabel title="Visibility" />
      </div>
      <div>
        <NormalDetailLabel number="6.4" unit="miles" />
      </div>
    </Box>
  );
};

export default VisibilityBox;
