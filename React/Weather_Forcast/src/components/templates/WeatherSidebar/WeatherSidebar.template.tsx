import React from "react";
import SearchPlaceHeaderSideBar from "../../molecules/SearchPlaceHeaderSideBar/SearchPlaceHeaderSideBar.molecules";
import BigIcon from "../../atoms/Icons/BigIcon/BigIcon.atom";
import BigDetailLabel from "../../molecules/DetailLabels/BigDetailLabel/BigDetailLabel.molecules";
import BigSlightLabel from "../../atoms/Labels/SlightLabels/BigSlightLabel/BigSlightLabel.atom";
import SmallDetailLabel from "../../molecules/DetailLabels/SmallDetailLabel/SmallDetailLabel.molecules";
import Box from "@mui/material/Box";
import classes from "./WeatherSidebar.module.scss";
const WeatherSidebar = () => {
  const data1 = {
    title: "Today",
    date: "Friday,5 Jun",
  };
  return (
    <div className={classes.weatherSideBar}>
      <Box
        className={classes.weatherSideBarBox}
        sx={{ width: 459, height: 1023 }}
      >
        <div className={classes.weatherSideBarSearchPlaceHeaderSidebar}>
          <SearchPlaceHeaderSideBar />
        </div>
        <div className={classes.weatherSideBarBigIcon}>
          <BigIcon title="" />
        </div>
        <div className={classes.weatherSideBarBigDetailLabel}>
          <BigDetailLabel />
        </div>
        <div className={classes.weatherSideBarBigSlightLabel}>
          <BigSlightLabel title="Shower" />
        </div>
        <div className={classes.weatherSideBarSmallDetailLabel}>
          <SmallDetailLabel name="" />
        </div>
      </Box>
    </div>
  );
};

export default WeatherSidebar;
