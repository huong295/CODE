import React from "react";
import WeatherMainContent from "../templates/WeatherMainContent/WeatherMainContent.template";
import WeatherSearchSidebar from "../templates/WeatherSearchSidebar/WeatherSearchSidebar.template";
import WeatherSidebar from "../templates/WeatherSidebar/WeatherSidebar.template";
import Box from "@mui/material/Box";
import classes from "./Weather.module.scss";
import { useSelector } from "react-redux";

const Weather = () => {
  const isSearchActive: boolean = useSelector(
    (state: any) => state.searchActive.isSearchActive
  );

  return (
    <div className={classes.weatherPage}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {isSearchActive ? <WeatherSearchSidebar /> : <WeatherSidebar />}
        <WeatherMainContent />
      </Box>
    </div>
  );
};

export default Weather;
