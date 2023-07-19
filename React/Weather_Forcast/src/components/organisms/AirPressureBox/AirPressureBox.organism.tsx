import React from "react";
import SmallSlightLabel from "../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import NormalDetailLabel from "../../molecules/DetailLabels/NormalDetailLabel/NormalDetailLabel.molecules";
import Box from "@mui/material/Box";
import classes from "./AirPressureBox.module.scss";
const AirPressureBox = () => {
  return (
    <Box
      className={classes.airPressureBox}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <div className={classes.airPressureBoxSmallSlightLabel}>
        <SmallSlightLabel title="Air Pressure" />
      </div>

      <NormalDetailLabel number="998" unit="mb" />
    </Box>
  );
};

export default AirPressureBox;
