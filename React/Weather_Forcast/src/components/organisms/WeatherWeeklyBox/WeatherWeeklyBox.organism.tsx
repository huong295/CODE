import React, { FC } from "react";
import SmallSlightLabel from "../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import SmallIcon from "../../atoms/Icons/SmallIcon/SmallIcon.atom";
import MinMaxTemperature from "../../molecules/MinMaxTemperature/MinMaxTemperature.molecules";
import snow from "../../../image/Shower.png";
import classes from "./WeatherWeeklyBox.module.scss";
import Box from "@mui/material/Box";
interface WeatherWeeklyBoxProps {
  title: string;
  imgUrl: string;
  minTemp : string;
   maxTemp: string;
}

const WeatherWeeklyBox: FC<WeatherWeeklyBoxProps> = ({
  title,
  imgUrl,
  minTemp,
  maxTemp
}) => {
  return (
    <Box
      className={classes.weatherWeeklyBox}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <div className={classes.weatherWeeklyBoxTitle}>
        <SmallSlightLabel title={title}/>
      </div>
      <div className={classes.weatherWeeklyBoxSmallIcon}>
        <SmallIcon imgUrl={imgUrl} altString="weatherTomorrow" />
      </div>
      <div>
        <MinMaxTemperature minTemp={minTemp} maxTemp={maxTemp} />
      </div>
    </Box>
  );
};

export default WeatherWeeklyBox;
