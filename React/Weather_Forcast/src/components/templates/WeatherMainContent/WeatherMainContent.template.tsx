import React from "react";
import UnitTemperatureBox from "../../molecules/UnitTemperatureBox/UnitTemperatureBox.molecules";
import WeatherWeeklyBox from "../../organisms/WeatherWeeklyBox/WeatherWeeklyBox.organism";
import WindStatusBox from "../../organisms/WindStatusBox/WindStatusBox.organism";
import HumidityBox from "../../organisms/HumidityBox/HumidityBox.organism";
import VisibilityBox from "../../organisms/VisibilityBox/VisibilityBox.organism";
import AirPressureBox from "../../organisms/AirPressureBox/AirPressureBox.organism";
import SmallSlightLabel from "../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import shower from "../../../image/Shower.png";
import heavyRain from "../../../image/HeavyRain.png";
import hail from "../../../image/Hail.png";
import lightCloud from "../../../image/LightCloud.png";
import sleet from "../../../image/Sleet.png";
import Box from "@mui/material/Box";
import classes from "./WeatherMainContent.module.scss";
import NormalSlightLabel from "../../atoms/Labels/SlightLabels/NormalSlightLabel/NormalSlightLabel.atom";

const WeatherMainContent = () => {
  return (
    <Box
      className={classes.weatherMainContent}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box
        className={classes.weatherMainContentUnitTemp}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <UnitTemperatureBox />
      </Box>
      <Box
        className={classes.weatherMainContentWeeklyBox}
        sx={{ display: "flex" }}
      >
        <WeatherWeeklyBox
          title="Tomorrow"
          imgUrl={shower}
          minTemp="15°C"
          maxTemp="45°C"
        />
        <WeatherWeeklyBox
          title="Sun, 7 Jun"
          imgUrl={hail}
          minTemp="16°C"
          maxTemp="18°C"
        />

        <WeatherWeeklyBox
          title="Sun, 8 Jun"
          imgUrl={heavyRain}
          minTemp="19°C"
          maxTemp="39°C"
        />
        <WeatherWeeklyBox
          title="Sun, 9 Jun"
          imgUrl={lightCloud}
          minTemp="19°C"
          maxTemp="39°C"
        />
        <WeatherWeeklyBox
          title="Sat, 10 Jun"
          imgUrl={sleet}
          minTemp="10°C"
          maxTemp="39°C"
        />
      </Box>

      <div className={classes.WeatherMainContentSmallBoldLabel}>
        Today's Hightlights
      </div>
      <Box
        className={classes.weatherMainContentDetail}
        sx={{ display: "flex" }}
      >
        <div className={classes.weatherMainContentDetailWind}>
          <WindStatusBox />
        </div>
        <div>
          <HumidityBox />
        </div>
      </Box>
      <Box
        className={classes.weatherMainContentDetail}
        sx={{ display: "flex" }}
      >
        <div className={classes.weatherMainContentDetailVisibility}>
          <VisibilityBox />
        </div>
        <div className={classes.weatherMainContentDetailAirPressure}>
          <AirPressureBox />
        </div>
      </Box>
      <div className={classes.weatherMainContentSmallSlightLabel}>
        <SmallSlightLabel title="created by HuongLe - devChallenges.io" />
      </div>
    </Box>
  );
};

export default WeatherMainContent;
