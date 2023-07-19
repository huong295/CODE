import React from "react";
import SmallSlightLabel from "../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import NormalDetailLabel from "../../molecules/DetailLabels/NormalDetailLabel/NormalDetailLabel.molecules";
import ProgressBar from "../../atoms/ProgressBars/ProgressBar.atom";
import Box from "@mui/material/Box";
import classes from "./HumidityBox.module.scss";
const HumidityBox = () => {
  return (
    <Box
      className={classes.humidityBox}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box className="classes.humidityBoxText" sx={{ pt:4, display: "flex" , flexDirection: "column", alignItems : "center" }}>
        <div className={classes.humidityBoxSmallSlightLabel}>
          <SmallSlightLabel title="Humidity" />
        </div>
        <div className="classes.humidityNormalDetailLabel"></div>
        <NormalDetailLabel number="84" unit="%" />
      </Box>
      <div className={classes.progressBarDetail}>
        <ProgressBar />
      </div>
    </Box>
  );
};

export default HumidityBox;