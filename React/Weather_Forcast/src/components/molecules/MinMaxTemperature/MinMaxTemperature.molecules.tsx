import React, { FC } from "react";
import SmallSlightLabel from "../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import Box from "@mui/material/Box";
import classes from "./MinMaxTemperature.module.scss";
import SmallBoldLabel from "../../atoms/Labels/BoldLabels/SmallBoldLabel/SmallBoldLabel.atom";
interface MinMaxTemperatureProps {
  minTemp: string;
  maxTemp: string;
}

const MinMaxTemperature: FC<MinMaxTemperatureProps> = ({
  minTemp,
  maxTemp,
}) => {
  return (
    <Box sx={{ display: "flex" }} className={classes.MinMaxTemperature}>
      <div className={classes.MinMaxTemperatureDetail}>
        <SmallBoldLabel title={minTemp} />
      </div>

      <div className={classes.MinMaxTemperatureDetail}>
        <SmallSlightLabel title={maxTemp} />
      </div>
    </Box>
  );
};

export default MinMaxTemperature;
